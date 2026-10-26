import { initInputBase } from "../html/inputBase.js";
import { bulletIcon } from "../icons/bulletIcon.js";
import { whenInputPlaced } from "./input.js";
import { adoptStyleSheet, defineDisplaySizeProperty, defineEventProperty } from "../utility/utility.js";

import pinInputStyleSheet from './pinInput.css' with { type: 'css' };

adoptStyleSheet(pinInputStyleSheet);

const OVERLAY_CLASS = 'pinInput-overlay';
const BULLET_CLASS = 'pinInput-bullet';
const BULLET_ENTERED_CLASS = 'pinInput-bullet-entered';
const DEFAULT_SIZE = 4;

const getValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').get;
const setValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;

//defines the properties of a pin input, which keeps its state in the closure
const definePinInputProperties = (element) => {
    let bullet = bulletIcon;        //function that creates a bullet, or a bullet to clone
    let value = '';
    let size = DEFAULT_SIZE;
    let changedValue = '';          //the value at the last 'change' event
    let bullets = [];               //the bullet slots
    let overlay = null;

    const createBullet = () => {
        const component = typeof bullet === 'function' ? bullet() : bullet.cloneNode(true);
        component.classList.add(BULLET_CLASS + '-component');
        return component;
    };

    //shows the entered characters as the darker bullets
    const refresh = () => {
        setValue.call(element, value);
        bullets.forEach((slot, index) => slot.classList.toggle(BULLET_ENTERED_CLASS, index < value.length));
    };

    //creates the bullets, in the overlay that is placed over the input
    const rebuild = () => {
        bullets = Array.from({ length: size }, () => {
            const slot = document.createElement('span');
            slot.classList.add(BULLET_CLASS);
            slot.append(createBullet());
            return slot;
        });
        overlay?.replaceChildren(...bullets);
        refresh();
    };

    overlay = document.createElement('span');
    overlay.classList.add(OVERLAY_CLASS);
    overlay.setAttribute('aria-hidden', 'true');
    //the structure is set here, not in the css: the input and the overlay share the only cell of the container's grid
    overlay.style.gridArea = '1 / 1';
    element.style.gridArea = '1 / 1';
    whenInputPlaced(element, (container) => {
        container.style.display = 'inline-grid';
        container.style.alignContent = 'start';     //if the container is stretched by its parent, the row keeps the height of the input
        container.append(overlay);
    });

    const define = (name, get, set) => {
        Object.defineProperty(element, name, { configurable: true, enumerable: true, get, set });
    };

    define('bullet', () => bullet, (newBullet) => {
        console.assert(newBullet === null || newBullet === undefined || typeof newBullet === 'function' || newBullet instanceof HTMLElement);
        bullet = newBullet ?? bulletIcon;
        rebuild();
    });

    define('value', () => value, (newValue) => {
        newValue = String(newValue ?? '');
        value = newValue.slice(0, size);
        changedValue = value;
        refresh();
    });

    define('size', () => size, (newSize) => {
        console.assert(Number.isInteger(newSize) && newSize > 0);
        size = newSize;
        value = value.slice(0, size);
        element.maxLength = size;
        rebuild();
    });

    //the value changes as the user does: the event 'input' is dispatched, and the event 'completed' if all the characters are entered
    const edit = (newValue) => {
        if (newValue === value) {
            return;
        }
        value = newValue;
        refresh();
        element.dispatchEvent(new Event('input', { bubbles: true }));
        if (value.length === size) {
            element.dispatchEvent(new Event('completed'));
        }
    };

    const commit = () => {
        if (value !== changedValue) {
            changedValue = value;
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    };

    //only typing one character and deleting one are allowed: every other edit (paste, cut, drop, deleting a selection, composition, ...) is cancelled
    element.addEventListener('beforeinput', (event) => {
        event.preventDefault();
        if (element.readOnly) {
            return;
        }
        switch (event.inputType) {
            case 'insertText':
                if (event.data?.length === 1 && value.length < size) {
                    edit(value + event.data);
                }
                break;
            case 'deleteContentBackward':
            case 'deleteContentForward':
                edit(value.slice(0, -1));
                break;
        }
    });

    element.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            commit();
        }
    });
    element.addEventListener('blur', commit);

    //the caret is not shown, and the selection is useless: keep it at the end
    const moveToEnd = () => element.setSelectionRange?.(value.length, value.length);
    element.addEventListener('select', moveToEnd);
    element.addEventListener('focus', moveToEnd);
    element.addEventListener('click', moveToEnd);

    element.maxLength = size;
    rebuild();
};

/**
 * Initializes an instance of HTMLInputElement as a pin input, looking like a MUI outlined text field that shows bullets instead of characters.
 *
 * It sets the element's type to 'text', then invokes the function `initInputBase(element, ...properties)`.
 *
 * The element gets the class 'pinInput' by default; an `additionalClassName` property adds further classes (the color classes
 * 'input-secondary', '-error', '-warning', '-info', '-success' change the focus color). Its `errorClassName` defaults to 'pinInput-error'.
 * The input is wrapped in a span of class 'input-container' as soon as it has a parent (see `getInputContainer` in input.js), together with the
 * bullets, which are spread evenly over the width of the element. Set the width of the element, e.g. with its style, to size the component.
 *
 * Each bullet that is not entered is shown in a light blue, each entered one in a darker blue.
 *
 * The element gets the property 'displaySize', which accepts 'small', 'medium' (the default) and 'large': the heights of MUI's text field (40px
 * and 56px), and a larger one (69px) as the large input.
 *
 * The element gets the following properties:
 *  - `bullet`: the component of each bullet; either a function that returns a new component each time it is invoked, or an element, which is
 *    cloned for each position. The default is the function `bulletIcon`; setting null or undefined restores it. The component is colored with
 *    the css color of its slot, so it should be filled with `var(--icon-fill-color, currentColor)`, like the bullet icon.
 *  - `value`: the string of the characters entered; setting it does not dispatch events, and a value longer than `size` is cut.
 *  - `size`: the number of characters to enter, i.e. the number of bullets; the default is 4.
 *
 * The user can only type one character, which is added at the end, and delete the last character: pasting, cutting, dropping and
 * deleting a selection are not possible.
 *
 * The element dispatches the events:
 *  - 'input': after each change of the value by the user.
 *  - 'change': when the user leaves the element or presses enter, if the value changed since the last 'change' event.
 *  - 'completed': after the 'input' event that completes the entering of all `size` characters. The property 'oncompleted' sets its handler.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPinInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'text';
    element.autocomplete = 'off';
    element.spellcheck = false;
    defineDisplaySizeProperty(element, 'pinInput-small', 'pinInput-large');
    definePinInputProperties(element);
    defineEventProperty(element, 'oncompleted', 'completed');
    initInputBase(element, { additionalClassName: 'pinInput', errorClassName: 'pinInput-error' }, ...properties);
}

/**
 * Creates a pin input.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pinInput = (...properties) => {
    const element = document.createElement('input');
    initPinInput(element, ...properties);
    return element;
}
