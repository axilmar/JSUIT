import { initIcon } from "./icon.js";

//the url of the missed video call svg; resolved relative to this module
const URL_MISSEDVIDEOCALL = new URL('../../assets/icons/missedVideoCall.svg', import.meta.url).href;

/**
 * Initializes an icon element as a missed video call icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/missedVideoCall.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMissedVideoCallIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MISSEDVIDEOCALL }, ...properties);
}

/**
 * Creates a missed video call icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const missedVideoCallIcon = (...properties) => {
    const element = document.createElement('div');
    initMissedVideoCallIcon(element, ...properties);
    return element;
}
