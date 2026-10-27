import { initIcon } from "./icon.js";

//the url of the do disturb outlined svg; resolved relative to this module
const URL_DODISTURBOUTLINED = new URL('../../assets/icons/doDisturbOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do disturb outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doDisturbOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoDisturbOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doDisturbOutlinedIcon', url: URL_DODISTURBOUTLINED }, ...properties);
}

/**
 * Creates a do disturb outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doDisturbOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoDisturbOutlinedIcon(element, ...properties);
    return element;
}
