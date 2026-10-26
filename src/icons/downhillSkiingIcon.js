import { initIcon } from "./icon.js";

//the url of the downhill skiing svg; resolved relative to this module
const URL_DOWNHILLSKIING = new URL('../../assets/icons/downhillSkiing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a downhill skiing icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/downhillSkiing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDownhillSkiingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOWNHILLSKIING }, ...properties);
}

/**
 * Creates a downhill skiing icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const downhillSkiingIcon = (...properties) => {
    const element = document.createElement('div');
    initDownhillSkiingIcon(element, ...properties);
    return element;
}
