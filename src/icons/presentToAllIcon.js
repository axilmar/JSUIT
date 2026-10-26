import { initIcon } from "./icon.js";

//the url of the present to all svg; resolved relative to this module
const URL_PRESENTTOALL = new URL('../../assets/icons/presentToAll.svg', import.meta.url).href;

/**
 * Initializes an icon element as a present to all icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/presentToAll.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPresentToAllIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PRESENTTOALL }, ...properties);
}

/**
 * Creates a present to all icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const presentToAllIcon = (...properties) => {
    const element = document.createElement('div');
    initPresentToAllIcon(element, ...properties);
    return element;
}
