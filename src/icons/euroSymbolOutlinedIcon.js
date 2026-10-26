import { initIcon } from "./icon.js";

//the url of the euro symbol outlined svg; resolved relative to this module
const URL_EUROSYMBOLOUTLINED = new URL('../../assets/icons/euroSymbolOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an euro symbol outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/euroSymbolOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEuroSymbolOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EUROSYMBOLOUTLINED }, ...properties);
}

/**
 * Creates an euro symbol outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const euroSymbolOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEuroSymbolOutlinedIcon(element, ...properties);
    return element;
}
