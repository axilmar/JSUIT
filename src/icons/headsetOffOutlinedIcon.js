import { initIcon } from "./icon.js";

//the url of the headset off outlined svg; resolved relative to this module
const URL_HEADSETOFFOUTLINED = new URL('../../assets/icons/headsetOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a headset off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/headsetOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeadsetOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'headsetOffOutlinedIcon', url: URL_HEADSETOFFOUTLINED }, ...properties);
}

/**
 * Creates a headset off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const headsetOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHeadsetOffOutlinedIcon(element, ...properties);
    return element;
}
