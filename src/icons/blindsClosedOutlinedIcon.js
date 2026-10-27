import { initIcon } from "./icon.js";

//the url of the blinds closed outlined svg; resolved relative to this module
const URL_BLINDSCLOSEDOUTLINED = new URL('../../assets/icons/blindsClosedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blinds closed outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blindsClosedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlindsClosedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'blindsClosedOutlinedIcon', url: URL_BLINDSCLOSEDOUTLINED }, ...properties);
}

/**
 * Creates a blinds closed outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blindsClosedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBlindsClosedOutlinedIcon(element, ...properties);
    return element;
}
