import { initIcon } from "./icon.js";

//the url of the lan svg; resolved relative to this module
const URL_LAN = new URL('../../assets/icons/lan.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lan icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lan.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLanIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lanIcon', url: URL_LAN }, ...properties);
}

/**
 * Creates a lan icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lanIcon = (...properties) => {
    const element = document.createElement('div');
    initLanIcon(element, ...properties);
    return element;
}
