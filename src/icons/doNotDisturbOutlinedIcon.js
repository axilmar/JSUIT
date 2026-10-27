import { initIcon } from "./icon.js";

//the url of the do not disturb outlined svg; resolved relative to this module
const URL_DONOTDISTURBOUTLINED = new URL('../../assets/icons/doNotDisturbOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do not disturb outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doNotDisturbOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoNotDisturbOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doNotDisturbOutlinedIcon', url: URL_DONOTDISTURBOUTLINED }, ...properties);
}

/**
 * Creates a do not disturb outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doNotDisturbOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoNotDisturbOutlinedIcon(element, ...properties);
    return element;
}
