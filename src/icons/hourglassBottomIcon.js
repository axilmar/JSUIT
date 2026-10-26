import { initIcon } from "./icon.js";

//the url of the hourglass bottom svg; resolved relative to this module
const URL_HOURGLASSBOTTOM = new URL('../../assets/icons/hourglassBottom.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hourglass bottom icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hourglassBottom.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHourglassBottomIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOURGLASSBOTTOM }, ...properties);
}

/**
 * Creates a hourglass bottom icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hourglassBottomIcon = (...properties) => {
    const element = document.createElement('div');
    initHourglassBottomIcon(element, ...properties);
    return element;
}
