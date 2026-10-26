import { initIcon } from "./icon.js";

//the url of the do not disturb on svg; resolved relative to this module
const URL_DONOTDISTURBON = new URL('../../assets/icons/doNotDisturbOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do not disturb on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doNotDisturbOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoNotDisturbOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DONOTDISTURBON }, ...properties);
}

/**
 * Creates a do not disturb on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doNotDisturbOnIcon = (...properties) => {
    const element = document.createElement('div');
    initDoNotDisturbOnIcon(element, ...properties);
    return element;
}
