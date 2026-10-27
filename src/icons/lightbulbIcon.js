import { initIcon } from "./icon.js";

//the url of the lightbulb svg; resolved relative to this module
const URL_LIGHTBULB = new URL('../../assets/icons/lightbulb.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lightbulb icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lightbulb.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLightbulbIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lightbulbIcon', url: URL_LIGHTBULB }, ...properties);
}

/**
 * Creates a lightbulb icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lightbulbIcon = (...properties) => {
    const element = document.createElement('div');
    initLightbulbIcon(element, ...properties);
    return element;
}
