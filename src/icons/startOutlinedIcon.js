import { initIcon } from "./icon.js";

//the url of the start outlined svg; resolved relative to this module
const URL_STARTOUTLINED = new URL('../../assets/icons/startOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a start outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/startOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STARTOUTLINED }, ...properties);
}

/**
 * Creates a start outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const startOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStartOutlinedIcon(element, ...properties);
    return element;
}
