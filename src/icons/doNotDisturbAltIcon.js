import { initIcon } from "./icon.js";

//the url of the do not disturb alt svg; resolved relative to this module
const URL_DONOTDISTURBALT = new URL('../../assets/icons/doNotDisturbAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do not disturb alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doNotDisturbAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoNotDisturbAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DONOTDISTURBALT }, ...properties);
}

/**
 * Creates a do not disturb alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doNotDisturbAltIcon = (...properties) => {
    const element = document.createElement('div');
    initDoNotDisturbAltIcon(element, ...properties);
    return element;
}
