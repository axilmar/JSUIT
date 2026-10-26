import { initIcon } from "./icon.js";

//the url of the no luggage outlined svg; resolved relative to this module
const URL_NOLUGGAGEOUTLINED = new URL('../../assets/icons/noLuggageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no luggage outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noLuggageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoLuggageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOLUGGAGEOUTLINED }, ...properties);
}

/**
 * Creates a no luggage outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noLuggageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoLuggageOutlinedIcon(element, ...properties);
    return element;
}
