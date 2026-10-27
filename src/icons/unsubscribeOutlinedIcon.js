import { initIcon } from "./icon.js";

//the url of the unsubscribe outlined svg; resolved relative to this module
const URL_UNSUBSCRIBEOUTLINED = new URL('../../assets/icons/unsubscribeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an unsubscribe outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/unsubscribeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUnsubscribeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'unsubscribeOutlinedIcon', url: URL_UNSUBSCRIBEOUTLINED }, ...properties);
}

/**
 * Creates an unsubscribe outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const unsubscribeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUnsubscribeOutlinedIcon(element, ...properties);
    return element;
}
