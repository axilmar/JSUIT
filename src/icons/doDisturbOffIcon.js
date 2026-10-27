import { initIcon } from "./icon.js";

//the url of the do disturb off svg; resolved relative to this module
const URL_DODISTURBOFF = new URL('../../assets/icons/doDisturbOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do disturb off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doDisturbOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoDisturbOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doDisturbOffIcon', url: URL_DODISTURBOFF }, ...properties);
}

/**
 * Creates a do disturb off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doDisturbOffIcon = (...properties) => {
    const element = document.createElement('div');
    initDoDisturbOffIcon(element, ...properties);
    return element;
}
