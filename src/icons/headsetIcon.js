import { initIcon } from "./icon.js";

//the url of the headset svg; resolved relative to this module
const URL_HEADSET = new URL('../../assets/icons/headset.svg', import.meta.url).href;

/**
 * Initializes an icon element as a headset icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/headset.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeadsetIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'headsetIcon', url: URL_HEADSET }, ...properties);
}

/**
 * Creates a headset icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const headsetIcon = (...properties) => {
    const element = document.createElement('div');
    initHeadsetIcon(element, ...properties);
    return element;
}
