import { initIcon } from "./icon.js";

//the url of the do disturb off outlined svg; resolved relative to this module
const URL_DODISTURBOFFOUTLINED = new URL('../../assets/icons/doDisturbOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do disturb off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doDisturbOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoDisturbOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doDisturbOffOutlinedIcon', url: URL_DODISTURBOFFOUTLINED }, ...properties);
}

/**
 * Creates a do disturb off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doDisturbOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoDisturbOffOutlinedIcon(element, ...properties);
    return element;
}
