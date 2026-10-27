import { initIcon } from "./icon.js";

//the url of the nine k outlined svg; resolved relative to this module
const URL_NINEKOUTLINED = new URL('../../assets/icons/nineKOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nine k outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nineKOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNineKOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nineKOutlinedIcon', url: URL_NINEKOUTLINED }, ...properties);
}

/**
 * Creates a nine k outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nineKOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNineKOutlinedIcon(element, ...properties);
    return element;
}
