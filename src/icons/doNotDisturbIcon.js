import { initIcon } from "./icon.js";

//the url of the do not disturb svg; resolved relative to this module
const URL_DONOTDISTURB = new URL('../../assets/icons/doNotDisturb.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do not disturb icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doNotDisturb.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoNotDisturbIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doNotDisturbIcon', url: URL_DONOTDISTURB }, ...properties);
}

/**
 * Creates a do not disturb icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doNotDisturbIcon = (...properties) => {
    const element = document.createElement('div');
    initDoNotDisturbIcon(element, ...properties);
    return element;
}
