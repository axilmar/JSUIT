import { initIcon } from "./icon.js";

//the url of the mic external on outlined svg; resolved relative to this module
const URL_MICEXTERNALONOUTLINED = new URL('../../assets/icons/micExternalOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mic external on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/micExternalOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMicExternalOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'micExternalOnOutlinedIcon', url: URL_MICEXTERNALONOUTLINED }, ...properties);
}

/**
 * Creates a mic external on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const micExternalOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMicExternalOnOutlinedIcon(element, ...properties);
    return element;
}
