import { initIcon } from "./icon.js";

//the url of the accessibility new outlined svg; resolved relative to this module
const URL_ACCESSIBILITYNEWOUTLINED = new URL('../../assets/icons/accessibilityNewOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an accessibility new outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessibilityNewOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessibilityNewOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accessibilityNewOutlinedIcon', url: URL_ACCESSIBILITYNEWOUTLINED }, ...properties);
}

/**
 * Creates an accessibility new outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessibilityNewOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessibilityNewOutlinedIcon(element, ...properties);
    return element;
}
