import { initInputBase } from "./inputBase.js";
import { adoptStyleSheet, defineDisplaySizeProperty, toLabelElement } from "./utility.js";

import inputStyleSheet from './input.css' with { type: 'css' };

adoptStyleSheet(inputStyleSheet);

const LABEL_CLASS = 'input-label';
const LABEL_SHRUNK_CLASS = 'input-label-shrunk';
const LABELED_CLASS = 'input-labeled';
const CONTAINER_CLASS = 'input-container';
const VARIANTS = ['outlined', 'filled', 'standard'];     //the class of a variant is 'input-' followed by its name

//the types that always show something in the field (a format, a swatch, an icon), so their label is always shrunk
const ALWAYS_SHRUNK_TYPES = ['date', 'datetime-local', 'month', 'week', 'time', 'color', 'file', 'search'];

const getValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').get;
const setValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;

//shrinks the label (moves it to the border) if the field has focus or a value, or if the type always shows something
const updateLabel = (element, state) => {
    if (state.label) {
        const shrunk = ALWAYS_SHRUNK_TYPES.includes(element.type) || document.activeElement === element || getValue.call(element) !== '';
        state.label.classList.toggle(LABEL_SHRUNK_CLASS, shrunk);
    }
};

const preparedContainers = new WeakMap();   //element -> the container that it gets when it has a parent, instead of a new one
const containers = new WeakMap();           //element -> its container, once it has one
let followObserver = null;

//puts the container in the place of the element, and the element in the container, as its first child; the element keeps the focus and the
//selection, which moving it in the page would lose
const putInContainer = (element, container) => {
    const focused = document.activeElement === element;
    let selection = null;
    try {
        selection = focused ? [element.selectionStart, element.selectionEnd] : null;
    }
    catch (error) {
        //the types of input that have no selection
    }
    element.replaceWith(container);
    container.prepend(element);
    if (focused) {
        element.focus({ preventScroll: true });
        if (selection && selection[0] !== undefined && typeof element.setSelectionRange === 'function') {
            element.setSelectionRange(...selection);
        }
    }
};

//the container follows its element: if the element is moved out of the container, the container goes to where the element is; if the element is
//removed, the container is removed too (and it comes back when the element is added again)
const followElements = (records) => {
    const moved = new Set();
    for (const record of records) {
        for (const node of [...record.removedNodes, ...record.addedNodes]) {
            if (containers.has(node)) {
                moved.add(node);
            }
        }
    }
    for (const element of moved) {
        const container = containers.get(element);
        if (element.parentNode === container) {
            continue;
        }
        if (!element.parentNode) {
            container.remove();
        }
        else if (!element.parentNode.classList?.contains(CONTAINER_CLASS)) {
            putInContainer(element, container);
        }
    }
};

/**
 * Returns the container of an input: the span of class 'input-container' that holds the input and the elements that go with it (the label,
 * the overlay of the text). The container is created if the input has a parent and does not have it yet; the input takes its place.
 *
 * The container follows the input: if the input is moved to another parent, the container goes with it; if the input is removed, the container
 * is removed too, and it is back when the input is added again. So an input is moved or removed as any other element, and the
 * elements of the container (the label, the buttons) are not left behind.
 *
 * @param {*} element the input element.
 *
 * @return {Element|null} the container, or null if the input has no parent yet.
 */
export const getInputContainer = (element) => {
    const prepared = preparedContainers.get(element);
    let container;
    if (element.parentNode === prepared || element.parentNode?.classList.contains(CONTAINER_CLASS)) {
        container = element.parentNode;
    }
    else if (!element.parentNode) {
        return null;
    }
    else {
        container = prepared ?? document.createElement('span');
        container.classList.add(CONTAINER_CLASS);
        putInContainer(element, container);
    }
    containers.set(element, container);
    if (!followObserver) {
        followObserver = new MutationObserver(followElements);
        followObserver.observe(document, { childList: true, subtree: true });
    }
    return container;
};

/**
 * Sets the container that an element gets when it is added to the page (see `getInputContainer`), instead of a new span: the element takes
 * the place of the container, and goes in it, as its first child. It is for the components that have more elements around the element
 * that the user holds, as the combo box, which is a select element; the container is created by the component, with the other elements.
 *
 * @param {*} element the element.
 * @param {Element} container the container, which gets the class 'input-container'.
 */
export const setInputContainer = (element, container) => {
    preparedContainers.set(element, container);
};

const pendingRefs = new Set();          //the inputs that wait for a parent, as weak references
const pendingCallbacks = new WeakMap(); //input -> the functions to invoke when it has a parent
let pendingObserver = null;

//gives the container to the pending inputs that have a parent now
const placePending = () => {
    for (const reference of [...pendingRefs]) {
        const element = reference.deref();
        const container = element && getInputContainer(element);
        if (!element) {
            pendingRefs.delete(reference);
        }
        else if (container) {
            pendingRefs.delete(reference);
            const callbacks = pendingCallbacks.get(element);
            pendingCallbacks.delete(element);
            callbacks.forEach(callback => callback(container));
        }
    }
    if (pendingRefs.size === 0) {
        pendingObserver.disconnect();
        pendingObserver = null;
    }
};

/**
 * Invokes a function with the container of an input (see `getInputContainer`), as soon as the input has a parent: immediately, if it
 * has one, or when it is added to the page.
 *
 * @param {*} element the input element.
 * @param {Function} callback the function, which is passed the container.
 */
export const whenInputPlaced = (element, callback) => {
    const container = getInputContainer(element);
    if (container) {
        callback(container);
        return;
    }
    if (pendingCallbacks.has(element)) {
        pendingCallbacks.get(element).push(callback);
        return;
    }
    pendingCallbacks.set(element, [callback]);
    pendingRefs.add(new WeakRef(element));
    if (!pendingObserver) {
        pendingObserver = new MutationObserver(placePending);
        pendingObserver.observe(document, { childList: true, subtree: true });
    }
};

//puts the input and the label in a container, if the input has a parent; returns true if the container exists
const placeLabel = (element, state) => {
    state.container = getInputContainer(element);
    if (!state.container) {
        return false;
    }
    state.container.append(state.label);
    return true;
};

//defines the property 'label'
const defineLabelProperty = (element) => {
    const state = { label: null, container: null };

    //an element without a parent cannot get its container yet; the label is placed when the element is added to the page
    const placeWhenAdded = () => {
        whenInputPlaced(element, () => {
            if (state.label) {
                placeLabel(element, state);
            }
        });
    };

    Object.defineProperty(element, 'value', {
        configurable: true,
        enumerable: true,
        get: () => getValue.call(element),
        set: (value) => { setValue.call(element, value); updateLabel(element, state); }
    });

    for (const eventName of ['input', 'change', 'focus', 'blur']) {
        element.addEventListener(eventName, () => updateLabel(element, state));
    }

    Object.defineProperty(element, 'label', {
        configurable: true,
        enumerable: true,
        get: () => state.label,
        set: (label) => {
            state.label?.remove();
            state.label = toLabelElement(label);
            element.classList.toggle(LABELED_CLASS, state.label !== null);
            if (state.label) {
                state.label.classList.add(LABEL_CLASS);
                updateLabel(element, state);
                if (!placeLabel(element, state)) {
                    placeWhenAdded();
                }
            }
        }
    });
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
            element.classList.remove(...VARIANTS.map(name => 'input-' + name));
            element.classList.add('input-' + value);
            variant = value;
        }
    });
};

/**
 * Initializes an instance of HTMLInputElement as an input field, looking like MUI's text field.
 * 
 * It invokes the function `initInputBase(element, ...properties)`.
 * 
 * The element gets the class 'input' by default; an `additionalClassName` property adds further classes
 * (the color classes 'input-secondary', '-error', '-warning', '-info', '-success' change the focus color).
 * Its `errorClassName` defaults to 'input-error'.
 * Its `busyClassName` defaults to 'input-busy'.
 * 
 * The element gets the property 'variant', which accepts 'outlined' (the default), 'filled' and 'standard': the looks of the
 * variants of MUI's text field. In the standard variant there is only an underline, in the filled one a gray background
 * with an underline, and in the outlined one a rounded border. The element has the class 'input-' and the variant.
 * 
 * The element gets the property 'displaySize', which accepts 'small', 'medium' (the default) and 'large'. The small and medium
 * sizes are MUI's: the vertical padding is 8.5px and 16.5px, so the height is 40px and 56px for the 16px font. MUI has no large
 * input, so the large size extends them: a 1.25rem font with 20px vertical padding (a height of about 69px). The label follows the size.
 * 
 * The element gets a property 'label', which accepts an element, or any other value (it is converted to a string, which becomes the text of a span); null removes the label.
 * The label is shown like the floating label of MUI's text field: inside the field while it is empty and not focused,
 * shrunk otherwise (above the field in the standard variant, on the top of the field in the filled one, on the border in the outlined
 * one; always shrunk for the types that always show something, like date and color).
 * An input cannot contain the label, so the input is wrapped in a span of class 'input-container' together with the label,
 * as soon as it has a parent; the container follows the input when it is moved or removed. In the outlined variant, the label has
 * an opaque background (css property `--input-label-background`, default white) that opens the notch in the border.
 * Setting it to null removes the label.
 * 
 * MUI's helper text and adornments are not available, because an input element cannot contain them.
 * 
 * The label is not available for the range input, which has no rectangular border.
 * 
 * The 'type' of the element must be set before this function is invoked.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    defineDisplaySizeProperty(element, 'input-small', 'input-large');
    defineVariantProperty(element);
    defineLabelProperty(element);
    element.variant = 'outlined';
    initInputBase(element, { additionalClassName: 'input', errorClassName: 'input-error', busyClassName: 'input-busy' }, ...properties);
}

/**
 * Creates an input field of type 'text'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const input = (...properties) => {
    const element = document.createElement('input');
    element.type = 'text';
    initInput(element, ...properties);
    return element;
}
