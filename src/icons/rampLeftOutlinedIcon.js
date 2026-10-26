import { initIcon } from "./icon.js";

//the url of the ramp left outlined svg; resolved relative to this module
const URL_RAMPLEFTOUTLINED = new URL('../../assets/icons/rampLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a ramp left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rampLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRampLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RAMPLEFTOUTLINED }, ...properties);
}

/**
 * Creates a ramp left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rampLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRampLeftOutlinedIcon(element, ...properties);
    return element;
}
