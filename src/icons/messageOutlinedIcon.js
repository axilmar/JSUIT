import { initIcon } from "./icon.js";

//the url of the message outlined svg; resolved relative to this module
const URL_MESSAGEOUTLINED = new URL('../../assets/icons/messageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a message outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/messageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMessageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'messageOutlinedIcon', url: URL_MESSAGEOUTLINED }, ...properties);
}

/**
 * Creates a message outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const messageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMessageOutlinedIcon(element, ...properties);
    return element;
}
