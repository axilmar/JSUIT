import { initIcon } from "./icon.js";

//the url of the brightness1 outlined svg; resolved relative to this module
const URL_BRIGHTNESS1OUTLINED = new URL('../../assets/icons/brightness1Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness1 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightness1Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightness1OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BRIGHTNESS1OUTLINED }, ...properties);
}

/**
 * Creates a brightness1 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightness1OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrightness1OutlinedIcon(element, ...properties);
    return element;
}
