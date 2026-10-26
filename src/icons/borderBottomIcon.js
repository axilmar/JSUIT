import { initIcon } from "./icon.js";

//the url of the border bottom svg; resolved relative to this module
const URL_BORDERBOTTOM = new URL('../../assets/icons/borderBottom.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border bottom icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderBottom.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderBottomIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BORDERBOTTOM }, ...properties);
}

/**
 * Creates a border bottom icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderBottomIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderBottomIcon(element, ...properties);
    return element;
}
