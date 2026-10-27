import { initIcon } from "./icon.js";

//the url of the accessibility svg; resolved relative to this module
const URL_ACCESSIBILITY = new URL('../../assets/icons/accessibility.svg', import.meta.url).href;

/**
 * Initializes an icon element as an accessibility icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessibility.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessibilityIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accessibilityIcon', url: URL_ACCESSIBILITY }, ...properties);
}

/**
 * Creates an accessibility icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessibilityIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessibilityIcon(element, ...properties);
    return element;
}
