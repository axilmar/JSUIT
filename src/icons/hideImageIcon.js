import { initIcon } from "./icon.js";

//the url of the hide image svg; resolved relative to this module
const URL_HIDEIMAGE = new URL('../../assets/icons/hideImage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hide image icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hideImage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHideImageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hideImageIcon', url: URL_HIDEIMAGE }, ...properties);
}

/**
 * Creates a hide image icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hideImageIcon = (...properties) => {
    const element = document.createElement('div');
    initHideImageIcon(element, ...properties);
    return element;
}
