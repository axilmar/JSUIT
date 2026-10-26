import { initIcon } from "./icon.js";

//the url of the doorbell outlined svg; resolved relative to this module
const URL_DOORBELLOUTLINED = new URL('../../assets/icons/doorbellOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a doorbell outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doorbellOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoorbellOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOORBELLOUTLINED }, ...properties);
}

/**
 * Creates a doorbell outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doorbellOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoorbellOutlinedIcon(element, ...properties);
    return element;
}
