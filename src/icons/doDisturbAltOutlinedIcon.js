import { initIcon } from "./icon.js";

//the url of the do disturb alt outlined svg; resolved relative to this module
const URL_DODISTURBALTOUTLINED = new URL('../../assets/icons/doDisturbAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do disturb alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doDisturbAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoDisturbAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DODISTURBALTOUTLINED }, ...properties);
}

/**
 * Creates a do disturb alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doDisturbAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoDisturbAltOutlinedIcon(element, ...properties);
    return element;
}
