import { initIcon } from "./icon.js";

//the url of the hourglass disabled svg; resolved relative to this module
const URL_HOURGLASSDISABLED = new URL('../../assets/icons/hourglassDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hourglass disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hourglassDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHourglassDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hourglassDisabledIcon', url: URL_HOURGLASSDISABLED }, ...properties);
}

/**
 * Creates a hourglass disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hourglassDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initHourglassDisabledIcon(element, ...properties);
    return element;
}
