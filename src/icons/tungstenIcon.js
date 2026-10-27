import { initIcon } from "./icon.js";

//the url of the tungsten svg; resolved relative to this module
const URL_TUNGSTEN = new URL('../../assets/icons/tungsten.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tungsten icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tungsten.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTungstenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tungstenIcon', url: URL_TUNGSTEN }, ...properties);
}

/**
 * Creates a tungsten icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tungstenIcon = (...properties) => {
    const element = document.createElement('div');
    initTungstenIcon(element, ...properties);
    return element;
}
