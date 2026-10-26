import { initIcon } from "./icon.js";

//the url of the south america outlined svg; resolved relative to this module
const URL_SOUTHAMERICAOUTLINED = new URL('../../assets/icons/southAmericaOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a south america outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/southAmericaOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSouthAmericaOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOUTHAMERICAOUTLINED }, ...properties);
}

/**
 * Creates a south america outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const southAmericaOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSouthAmericaOutlinedIcon(element, ...properties);
    return element;
}
