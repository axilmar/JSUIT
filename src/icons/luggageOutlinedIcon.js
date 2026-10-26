import { initIcon } from "./icon.js";

//the url of the luggage outlined svg; resolved relative to this module
const URL_LUGGAGEOUTLINED = new URL('../../assets/icons/luggageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a luggage outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/luggageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLuggageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LUGGAGEOUTLINED }, ...properties);
}

/**
 * Creates a luggage outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const luggageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLuggageOutlinedIcon(element, ...properties);
    return element;
}
