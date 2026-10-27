import { initIcon } from "./icon.js";

//the url of the wine bar svg; resolved relative to this module
const URL_WINEBAR = new URL('../../assets/icons/wineBar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wine bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wineBar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWineBarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wineBarIcon', url: URL_WINEBAR }, ...properties);
}

/**
 * Creates a wine bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wineBarIcon = (...properties) => {
    const element = document.createElement('div');
    initWineBarIcon(element, ...properties);
    return element;
}
