import { initIcon } from "./icon.js";

//the url of the cyclone outlined svg; resolved relative to this module
const URL_CYCLONEOUTLINED = new URL('../../assets/icons/cycloneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cyclone outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cycloneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCycloneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CYCLONEOUTLINED }, ...properties);
}

/**
 * Creates a cyclone outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cycloneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCycloneOutlinedIcon(element, ...properties);
    return element;
}
