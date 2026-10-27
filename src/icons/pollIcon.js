import { initIcon } from "./icon.js";

//the url of the poll svg; resolved relative to this module
const URL_POLL = new URL('../../assets/icons/poll.svg', import.meta.url).href;

/**
 * Initializes an icon element as a poll icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/poll.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPollIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pollIcon', url: URL_POLL }, ...properties);
}

/**
 * Creates a poll icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pollIcon = (...properties) => {
    const element = document.createElement('div');
    initPollIcon(element, ...properties);
    return element;
}
