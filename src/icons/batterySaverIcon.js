import { initIcon } from "./icon.js";

//the url of the battery saver svg; resolved relative to this module
const URL_BATTERYSAVER = new URL('../../assets/icons/batterySaver.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery saver icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batterySaver.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatterySaverIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERYSAVER }, ...properties);
}

/**
 * Creates a battery saver icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batterySaverIcon = (...properties) => {
    const element = document.createElement('div');
    initBatterySaverIcon(element, ...properties);
    return element;
}
