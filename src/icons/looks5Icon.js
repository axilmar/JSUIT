import { initIcon } from "./icon.js";

//the url of the looks5 svg; resolved relative to this module
const URL_LOOKS5 = new URL('../../assets/icons/looks5.svg', import.meta.url).href;

/**
 * Initializes an icon element as a looks5 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/looks5.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLooks5Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'looks5Icon', url: URL_LOOKS5 }, ...properties);
}

/**
 * Creates a looks5 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const looks5Icon = (...properties) => {
    const element = document.createElement('div');
    initLooks5Icon(element, ...properties);
    return element;
}
