import { initIcon } from "./icon.js";

//the url of the hourglass full outlined svg; resolved relative to this module
const URL_HOURGLASSFULLOUTLINED = new URL('../../assets/icons/hourglassFullOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hourglass full outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hourglassFullOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHourglassFullOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOURGLASSFULLOUTLINED }, ...properties);
}

/**
 * Creates a hourglass full outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hourglassFullOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHourglassFullOutlinedIcon(element, ...properties);
    return element;
}
