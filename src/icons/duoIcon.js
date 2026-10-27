import { initIcon } from "./icon.js";

//the url of the duo svg; resolved relative to this module
const URL_DUO = new URL('../../assets/icons/duo.svg', import.meta.url).href;

/**
 * Initializes an icon element as a duo icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/duo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDuoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'duoIcon', url: URL_DUO }, ...properties);
}

/**
 * Creates a duo icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const duoIcon = (...properties) => {
    const element = document.createElement('div');
    initDuoIcon(element, ...properties);
    return element;
}
