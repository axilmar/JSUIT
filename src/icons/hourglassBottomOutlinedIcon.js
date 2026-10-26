import { initIcon } from "./icon.js";

//the url of the hourglass bottom outlined svg; resolved relative to this module
const URL_HOURGLASSBOTTOMOUTLINED = new URL('../../assets/icons/hourglassBottomOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hourglass bottom outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hourglassBottomOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHourglassBottomOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOURGLASSBOTTOMOUTLINED }, ...properties);
}

/**
 * Creates a hourglass bottom outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hourglassBottomOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHourglassBottomOutlinedIcon(element, ...properties);
    return element;
}
