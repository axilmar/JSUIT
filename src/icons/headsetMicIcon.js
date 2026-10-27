import { initIcon } from "./icon.js";

//the url of the headset mic svg; resolved relative to this module
const URL_HEADSETMIC = new URL('../../assets/icons/headsetMic.svg', import.meta.url).href;

/**
 * Initializes an icon element as a headset mic icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/headsetMic.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeadsetMicIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'headsetMicIcon', url: URL_HEADSETMIC }, ...properties);
}

/**
 * Creates a headset mic icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const headsetMicIcon = (...properties) => {
    const element = document.createElement('div');
    initHeadsetMicIcon(element, ...properties);
    return element;
}
