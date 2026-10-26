import { initIcon } from "./icon.js";

//the url of the missed video call outlined svg; resolved relative to this module
const URL_MISSEDVIDEOCALLOUTLINED = new URL('../../assets/icons/missedVideoCallOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a missed video call outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/missedVideoCallOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMissedVideoCallOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MISSEDVIDEOCALLOUTLINED }, ...properties);
}

/**
 * Creates a missed video call outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const missedVideoCallOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMissedVideoCallOutlinedIcon(element, ...properties);
    return element;
}
