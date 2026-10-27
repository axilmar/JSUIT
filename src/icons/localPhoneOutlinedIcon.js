import { initIcon } from "./icon.js";

//the url of the local phone outlined svg; resolved relative to this module
const URL_LOCALPHONEOUTLINED = new URL('../../assets/icons/localPhoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local phone outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localPhoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalPhoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localPhoneOutlinedIcon', url: URL_LOCALPHONEOUTLINED }, ...properties);
}

/**
 * Creates a local phone outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localPhoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalPhoneOutlinedIcon(element, ...properties);
    return element;
}
