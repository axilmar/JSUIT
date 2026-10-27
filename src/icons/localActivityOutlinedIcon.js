import { initIcon } from "./icon.js";

//the url of the local activity outlined svg; resolved relative to this module
const URL_LOCALACTIVITYOUTLINED = new URL('../../assets/icons/localActivityOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local activity outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localActivityOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalActivityOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localActivityOutlinedIcon', url: URL_LOCALACTIVITYOUTLINED }, ...properties);
}

/**
 * Creates a local activity outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localActivityOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalActivityOutlinedIcon(element, ...properties);
    return element;
}
