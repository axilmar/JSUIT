import { initIcon } from "./icon.js";

//the url of the hourglass empty outlined svg; resolved relative to this module
const URL_HOURGLASSEMPTYOUTLINED = new URL('../../assets/icons/hourglassEmptyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hourglass empty outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hourglassEmptyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHourglassEmptyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hourglassEmptyOutlinedIcon', url: URL_HOURGLASSEMPTYOUTLINED }, ...properties);
}

/**
 * Creates a hourglass empty outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hourglassEmptyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHourglassEmptyOutlinedIcon(element, ...properties);
    return element;
}
