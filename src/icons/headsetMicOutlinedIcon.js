import { initIcon } from "./icon.js";

//the url of the headset mic outlined svg; resolved relative to this module
const URL_HEADSETMICOUTLINED = new URL('../../assets/icons/headsetMicOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a headset mic outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/headsetMicOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeadsetMicOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'headsetMicOutlinedIcon', url: URL_HEADSETMICOUTLINED }, ...properties);
}

/**
 * Creates a headset mic outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const headsetMicOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHeadsetMicOutlinedIcon(element, ...properties);
    return element;
}
