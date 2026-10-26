import { initIcon } from "./icon.js";

//the url of the earbuds battery outlined svg; resolved relative to this module
const URL_EARBUDSBATTERYOUTLINED = new URL('../../assets/icons/earbudsBatteryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an earbuds battery outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/earbudsBatteryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEarbudsBatteryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EARBUDSBATTERYOUTLINED }, ...properties);
}

/**
 * Creates an earbuds battery outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const earbudsBatteryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEarbudsBatteryOutlinedIcon(element, ...properties);
    return element;
}
