import { initIcon } from "./icon.js";

//the url of the do disturb alt svg; resolved relative to this module
const URL_DODISTURBALT = new URL('../../assets/icons/doDisturbAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do disturb alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doDisturbAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoDisturbAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doDisturbAltIcon', url: URL_DODISTURBALT }, ...properties);
}

/**
 * Creates a do disturb alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doDisturbAltIcon = (...properties) => {
    const element = document.createElement('div');
    initDoDisturbAltIcon(element, ...properties);
    return element;
}
