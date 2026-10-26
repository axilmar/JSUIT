import { initIcon } from "./icon.js";

//the url of the do not disturb off outlined svg; resolved relative to this module
const URL_DONOTDISTURBOFFOUTLINED = new URL('../../assets/icons/doNotDisturbOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do not disturb off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doNotDisturbOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoNotDisturbOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DONOTDISTURBOFFOUTLINED }, ...properties);
}

/**
 * Creates a do not disturb off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doNotDisturbOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoNotDisturbOffOutlinedIcon(element, ...properties);
    return element;
}
