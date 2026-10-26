import { initIcon } from "./icon.js";

//the url of the event repeat svg; resolved relative to this module
const URL_EVENTREPEAT = new URL('../../assets/icons/eventRepeat.svg', import.meta.url).href;

/**
 * Initializes an icon element as an event repeat icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eventRepeat.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEventRepeatIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EVENTREPEAT }, ...properties);
}

/**
 * Creates an event repeat icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eventRepeatIcon = (...properties) => {
    const element = document.createElement('div');
    initEventRepeatIcon(element, ...properties);
    return element;
}
