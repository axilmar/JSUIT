import { initIcon } from "./icon.js";

//the url of the do not disturb on outlined svg; resolved relative to this module
const URL_DONOTDISTURBONOUTLINED = new URL('../../assets/icons/doNotDisturbOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do not disturb on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doNotDisturbOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoNotDisturbOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DONOTDISTURBONOUTLINED }, ...properties);
}

/**
 * Creates a do not disturb on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doNotDisturbOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoNotDisturbOnOutlinedIcon(element, ...properties);
    return element;
}
