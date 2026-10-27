import { initIcon } from "./icon.js";

//the url of the chair alt outlined svg; resolved relative to this module
const URL_CHAIRALTOUTLINED = new URL('../../assets/icons/chairAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chair alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chairAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChairAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'chairAltOutlinedIcon', url: URL_CHAIRALTOUTLINED }, ...properties);
}

/**
 * Creates a chair alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chairAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChairAltOutlinedIcon(element, ...properties);
    return element;
}
