import { initIcon } from "./icon.js";

//the url of the temple hindu svg; resolved relative to this module
const URL_TEMPLEHINDU = new URL('../../assets/icons/templeHindu.svg', import.meta.url).href;

/**
 * Initializes an icon element as a temple hindu icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/templeHindu.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTempleHinduIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TEMPLEHINDU }, ...properties);
}

/**
 * Creates a temple hindu icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const templeHinduIcon = (...properties) => {
    const element = document.createElement('div');
    initTempleHinduIcon(element, ...properties);
    return element;
}
