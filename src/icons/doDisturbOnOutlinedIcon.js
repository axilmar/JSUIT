import { initIcon } from "./icon.js";

//the url of the do disturb on outlined svg; resolved relative to this module
const URL_DODISTURBONOUTLINED = new URL('../../assets/icons/doDisturbOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do disturb on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doDisturbOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoDisturbOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DODISTURBONOUTLINED }, ...properties);
}

/**
 * Creates a do disturb on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doDisturbOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoDisturbOnOutlinedIcon(element, ...properties);
    return element;
}
