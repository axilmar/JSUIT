import { initIcon } from "./icon.js";

//the url of the event repeat outlined svg; resolved relative to this module
const URL_EVENTREPEATOUTLINED = new URL('../../assets/icons/eventRepeatOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an event repeat outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eventRepeatOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEventRepeatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EVENTREPEATOUTLINED }, ...properties);
}

/**
 * Creates an event repeat outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eventRepeatOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEventRepeatOutlinedIcon(element, ...properties);
    return element;
}
