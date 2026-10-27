import { initIcon } from "./icon.js";

//the url of the headset off svg; resolved relative to this module
const URL_HEADSETOFF = new URL('../../assets/icons/headsetOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a headset off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/headsetOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeadsetOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'headsetOffIcon', url: URL_HEADSETOFF }, ...properties);
}

/**
 * Creates a headset off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const headsetOffIcon = (...properties) => {
    const element = document.createElement('div');
    initHeadsetOffIcon(element, ...properties);
    return element;
}
