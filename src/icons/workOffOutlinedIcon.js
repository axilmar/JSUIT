import { initIcon } from "./icon.js";

//the url of the work off outlined svg; resolved relative to this module
const URL_WORKOFFOUTLINED = new URL('../../assets/icons/workOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a work off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/workOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWorkOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'workOffOutlinedIcon', url: URL_WORKOFFOUTLINED }, ...properties);
}

/**
 * Creates a work off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const workOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWorkOffOutlinedIcon(element, ...properties);
    return element;
}
