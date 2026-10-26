import { initIcon } from "./icon.js";

//the url of the bedtime off outlined svg; resolved relative to this module
const URL_BEDTIMEOFFOUTLINED = new URL('../../assets/icons/bedtimeOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bedtime off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bedtimeOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBedtimeOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BEDTIMEOFFOUTLINED }, ...properties);
}

/**
 * Creates a bedtime off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bedtimeOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBedtimeOffOutlinedIcon(element, ...properties);
    return element;
}
