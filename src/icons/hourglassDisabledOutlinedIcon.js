import { initIcon } from "./icon.js";

//the url of the hourglass disabled outlined svg; resolved relative to this module
const URL_HOURGLASSDISABLEDOUTLINED = new URL('../../assets/icons/hourglassDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hourglass disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hourglassDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHourglassDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOURGLASSDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a hourglass disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hourglassDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHourglassDisabledOutlinedIcon(element, ...properties);
    return element;
}
