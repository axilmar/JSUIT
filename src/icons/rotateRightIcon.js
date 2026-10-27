import { initIcon } from "./icon.js";

//the url of the rotate right svg; resolved relative to this module
const URL_ROTATERIGHT = new URL('../../assets/icons/rotateRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rotate right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rotateRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRotateRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rotateRightIcon', url: URL_ROTATERIGHT }, ...properties);
}

/**
 * Creates a rotate right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rotateRightIcon = (...properties) => {
    const element = document.createElement('div');
    initRotateRightIcon(element, ...properties);
    return element;
}
