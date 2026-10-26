import { initIcon } from "./icon.js";

//the url of the bedtime outlined svg; resolved relative to this module
const URL_BEDTIMEOUTLINED = new URL('../../assets/icons/bedtimeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bedtime outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bedtimeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBedtimeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BEDTIMEOUTLINED }, ...properties);
}

/**
 * Creates a bedtime outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bedtimeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBedtimeOutlinedIcon(element, ...properties);
    return element;
}
