import { initIconButton } from "./iconButton.js";
import { closeIcon } from "../icons/closeIcon.js";

const VARIANTS = ['outlined', 'filled', 'standard'];

//defines the property 'variant', which is the variant of the close icon of the button
const defineVariantProperty = (element) => {
    let variant = 'standard';

    Object.defineProperty(element, 'variant', {
        configurable: true,
        enumerable: true,
        get: () => variant,
        set: (value) => {
            console.assert(VARIANTS.includes(value));
            variant = VARIANTS.includes(value) ? value : 'standard';
            element.icon.variant = variant;
        }
    });
};

/**
 * Initializes an instance of HTMLButtonElement as a close button.
 *
 * It invokes the function `initIconButton(element, ...properties)`.
 *
 * The button is an icon button whose icon is a close icon (an x). Its type is 'button', so it does not submit a form, and its accessible
 * name is 'Close'; the `aria-label` attribute can replace it.
 *
 * The element gets the property 'variant', which accepts 'standard' (the default, a plain x), 'outlined' (an x in a circle outline) and 'filled' (an x
 * cut out of a filled circle): it sets the property 'variant' of the icon of the button, which is a close icon. If the icon is replaced, the new
 * icon gets the variant the next time the property is set.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloseButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    element.type = 'button';
    element.setAttribute('aria-label', 'Close');
    defineVariantProperty(element);
    initIconButton(element, { additionalClassName: 'closeButton', icon: closeIcon() }, ...properties);
}

/**
 * Creates a close button.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const closeButton = (...properties) => {
    const element = document.createElement('button');
    initCloseButton(element, ...properties);
    return element;
}
