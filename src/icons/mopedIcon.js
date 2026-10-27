import { initIcon } from "./icon.js";

//the url of the moped svg; resolved relative to this module
const URL_MOPED = new URL('../../assets/icons/moped.svg', import.meta.url).href;

/**
 * Initializes an icon element as a moped icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moped.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMopedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mopedIcon', url: URL_MOPED }, ...properties);
}

/**
 * Creates a moped icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mopedIcon = (...properties) => {
    const element = document.createElement('div');
    initMopedIcon(element, ...properties);
    return element;
}
