import { initIcon } from "./icon.js";

//the url of the euro symbol svg; resolved relative to this module
const URL_EUROSYMBOL = new URL('../../assets/icons/euroSymbol.svg', import.meta.url).href;

/**
 * Initializes an icon element as an euro symbol icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/euroSymbol.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEuroSymbolIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'euroSymbolIcon', url: URL_EUROSYMBOL }, ...properties);
}

/**
 * Creates an euro symbol icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const euroSymbolIcon = (...properties) => {
    const element = document.createElement('div');
    initEuroSymbolIcon(element, ...properties);
    return element;
}
