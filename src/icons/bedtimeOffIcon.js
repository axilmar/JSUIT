import { initIcon } from "./icon.js";

//the url of the bedtime off svg; resolved relative to this module
const URL_BEDTIMEOFF = new URL('../../assets/icons/bedtimeOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bedtime off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bedtimeOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBedtimeOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BEDTIMEOFF }, ...properties);
}

/**
 * Creates a bedtime off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bedtimeOffIcon = (...properties) => {
    const element = document.createElement('div');
    initBedtimeOffIcon(element, ...properties);
    return element;
}
