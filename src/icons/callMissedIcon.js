import { initIcon } from "./icon.js";

//the url of the call missed svg; resolved relative to this module
const URL_CALLMISSED = new URL('../../assets/icons/callMissed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call missed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callMissed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallMissedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CALLMISSED }, ...properties);
}

/**
 * Creates a call missed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callMissedIcon = (...properties) => {
    const element = document.createElement('div');
    initCallMissedIcon(element, ...properties);
    return element;
}
