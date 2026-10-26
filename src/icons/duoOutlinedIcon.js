import { initIcon } from "./icon.js";

//the url of the duo outlined svg; resolved relative to this module
const URL_DUOOUTLINED = new URL('../../assets/icons/duoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a duo outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/duoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDuoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DUOOUTLINED }, ...properties);
}

/**
 * Creates a duo outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const duoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDuoOutlinedIcon(element, ...properties);
    return element;
}
