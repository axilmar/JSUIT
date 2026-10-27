import { initIcon } from "./icon.js";

//the url of the pest control svg; resolved relative to this module
const URL_PESTCONTROL = new URL('../../assets/icons/pestControl.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pest control icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pestControl.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPestControlIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pestControlIcon', url: URL_PESTCONTROL }, ...properties);
}

/**
 * Creates a pest control icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pestControlIcon = (...properties) => {
    const element = document.createElement('div');
    initPestControlIcon(element, ...properties);
    return element;
}
