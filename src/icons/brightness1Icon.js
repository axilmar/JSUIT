import { initIcon } from "./icon.js";

//the url of the brightness1 svg; resolved relative to this module
const URL_BRIGHTNESS1 = new URL('../../assets/icons/brightness1.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness1 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightness1.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightness1Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BRIGHTNESS1 }, ...properties);
}

/**
 * Creates a brightness1 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightness1Icon = (...properties) => {
    const element = document.createElement('div');
    initBrightness1Icon(element, ...properties);
    return element;
}
