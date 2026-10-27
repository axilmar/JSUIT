import { initIcon } from "./icon.js";

//the url of the accessibility new svg; resolved relative to this module
const URL_ACCESSIBILITYNEW = new URL('../../assets/icons/accessibilityNew.svg', import.meta.url).href;

/**
 * Initializes an icon element as an accessibility new icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessibilityNew.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessibilityNewIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accessibilityNewIcon', url: URL_ACCESSIBILITYNEW }, ...properties);
}

/**
 * Creates an accessibility new icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessibilityNewIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessibilityNewIcon(element, ...properties);
    return element;
}
