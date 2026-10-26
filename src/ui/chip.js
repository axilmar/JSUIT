import { initDiv } from "../html/div.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "../utility/utility.js";
import { closeButton as createCloseButton } from "./closeButton.js";

import chipStyleSheet from './chip.css' with { type: 'css' };

adoptStyleSheet(chipStyleSheet);

const VARIANTS = ['outlined', 'filled'];                //the class of a variant is 'chip-' followed by its name
const POSITIONS = { start: 'start', left: 'start', end: 'end', right: 'end' };
const CLOSE_BUTTON_CLASS = 'chip-closeButton';

//returns the descriptor of a property of the prototypes of an element
const findDescriptor = (element, name) => {
    for (let prototype = Object.getPrototypeOf(element); prototype; prototype = Object.getPrototypeOf(prototype)) {
        const descriptor = Object.getOwnPropertyDescriptor(prototype, name);
        if (descriptor) {
            return descriptor;
        }
    }
};

//defines the property 'variant'
const defineVariantProperty = (element) => {
    let variant;

    Object.defineProperty(element, 'variant', {
        configurable: true,
        enumerable: true,
        get: () => variant,
        set: (value) => {
            console.assert(VARIANTS.includes(value));
            element.classList.remove(...VARIANTS.map(name => 'chip-' + name));
            element.classList.add('chip-' + value);
            variant = value;
        }
    });
};

//defines the behaviour of the clickable and the closable chip, and the properties 'closeButton' and 'closeButtonPosition'
const defineChipBehavior = (element) => {
    const defaultCloseButton = createCloseButton({ variant: 'filled' });
    let currentCloseButton = defaultCloseButton;
    let position = 'end';

    const isClickable = () => typeof element.onclick === 'function';
    const isClosable = () => typeof element.onclose === 'function';

    //the clickable and closable states follow the handlers
    const update = () => {
        const clickable = isClickable();
        const closable = isClosable();
        element.classList.toggle('chip-clickable', clickable);
        element.classList.toggle('chip-closable', closable);
        if (clickable) {
            element.setAttribute('role', 'button');
        }
        else {
            element.removeAttribute('role');
        }
        if (clickable || closable) {
            element.setAttribute('tabindex', '0');
        }
        else {
            element.removeAttribute('tabindex');
        }
        if (closable && currentCloseButton.parentNode !== element) {
            element.append(currentCloseButton);
        }
        else if (!closable && currentCloseButton.parentNode === element) {
            currentCloseButton.remove();
        }
    };

    //the 'onclick' and 'onclose' are the standard handler properties; the chip is clickable and closable while they are set
    for (const name of ['onclick', 'onclose']) {
        const descriptor = findDescriptor(element, name);
        Object.defineProperty(element, name, {
            configurable: true,
            enumerable: true,
            get: () => descriptor.get.call(element),
            set: (value) => {
                descriptor.set.call(element, value);
                update();
            }
        });
    }

    //invokes the 'close' handlers, then removes the chip from its parent
    const close = () => {
        element.dispatchEvent(new Event('close'));
        element.remove();
    };

    //a click inside the close button closes the chip, and it is not a click of the chip (MUI's delete icon does the same)
    element.addEventListener('click', (event) => {
        if (isClosable() && currentCloseButton.contains(event.target)) {
            event.stopImmediatePropagation();
            close();
        }
    });

    //the keyboard: Enter and Space click a clickable chip, Backspace and Delete close a closable one (as in MUI)
    element.addEventListener('keydown', (event) => {
        if (event.target !== element) {
            return;
        }
        if (isClickable() && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            element.click();
        }
        else if (isClosable() && (event.key === 'Backspace' || event.key === 'Delete')) {
            event.preventDefault();
            close();
        }
    });

    Object.defineProperty(element, 'closeButton', {
        configurable: true,
        enumerable: true,
        get: () => currentCloseButton,
        set: (value) => {
            console.assert(value === null || value === undefined || value instanceof Element);
            const newCloseButton = value ?? defaultCloseButton;
            if (newCloseButton === currentCloseButton) {
                return;
            }
            newCloseButton.classList.add(CLOSE_BUTTON_CLASS);
            if (currentCloseButton.parentNode === element) {
                currentCloseButton.replaceWith(newCloseButton);
            }
            currentCloseButton = newCloseButton;
        }
    });
    defaultCloseButton.classList.add(CLOSE_BUTTON_CLASS);

    Object.defineProperty(element, 'closeButtonPosition', {
        configurable: true,
        enumerable: true,
        get: () => position,
        set: (value) => {
            console.assert(Object.hasOwn(POSITIONS, value));
            position = POSITIONS[value] ?? 'end';
            element.classList.toggle('chip-closeStart', position === 'start');
            element.classList.toggle('chip-closeEnd', position === 'end');
        }
    });
    element.closeButtonPosition = 'end';
};

/**
 * Initializes an instance of HTMLDivElement as a chip, looking like MUI's Chip.
 *
 * It invokes the function `initDiv(element, ...properties)`.
 *
 * The element gets the class 'chip' by default; an `additionalClassName` property adds further classes. The children of the chip (text, an
 * avatar, an icon) are laid out horizontally, in a row. An avatar child has the size and the position of MUI's chip avatar.
 *
 * The chip is clickable while its `onclick` handler is set: it has the pointer cursor and the hover, focus and pressed looks of a clickable chip, it
 * is a tab stop, and Enter and Space click it, as a button (its role is 'button').
 *
 * The chip is closable while its `onclose` handler is set, which is invoked (with a 'close' event) when the close button is clicked, or when
 * Backspace or Delete is pressed while the chip has the focus. A closable chip has the close button, and removes itself from its parent
 * after invoking the handler. Without an `onclose` handler the chip has no close button. A click on the close button is not a click of the chip.
 *
 * The element gets the following properties:
 *  - `variant`: 'filled' (the default, a gray background) or 'outlined' (a border, and no background).
 *  - `displaySize`: 'small' (24px), 'medium' (32px, the default, as MUI's chip) or 'large' (40px).
 *  - `closeButton`: the close button; by default an instance of `closeButton` of the 'filled' variant (as MUI's delete icon), which the programmer can replace with any element (the click
 *    on it, or in it, closes the chip). The chip adds the class 'chip-closeButton' to it. Setting it to null or undefined restores the default.
 *  - `closeButtonPosition`: 'start' or 'left' (the close button is at the left), 'end' or 'right' (at the right, the default). The getter returns
 *    'start' or 'end'.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChip = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    defineVariantProperty(element);
    defineDisplaySizeProperty(element, 'chip-small', 'chip-large');
    defineChipBehavior(element);
    element.variant = 'filled';
    initDiv(element, { additionalClassName: 'chip' }, ...properties);
}

/**
 * Creates a chip.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chip = (...properties) => {
    const element = document.createElement('div');
    initChip(element, ...properties);
    return element;
}
