import { initIcon } from "./icon.js";

//the url of the schedule send outlined svg; resolved relative to this module
const URL_SCHEDULESENDOUTLINED = new URL('../../assets/icons/scheduleSendOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a schedule send outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/scheduleSendOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScheduleSendOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCHEDULESENDOUTLINED }, ...properties);
}

/**
 * Creates a schedule send outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scheduleSendOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScheduleSendOutlinedIcon(element, ...properties);
    return element;
}
