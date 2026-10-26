import { initIcon } from "./icon.js";

//the url of the offline pin outlined svg; resolved relative to this module
const URL_OFFLINEPINOUTLINED = new URL('../../assets/icons/offlinePinOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an offline pin outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/offlinePinOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOfflinePinOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OFFLINEPINOUTLINED }, ...properties);
}

/**
 * Creates an offline pin outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const offlinePinOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOfflinePinOutlinedIcon(element, ...properties);
    return element;
}
