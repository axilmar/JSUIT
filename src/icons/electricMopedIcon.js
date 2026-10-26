import { initIcon } from "./icon.js";

//the url of the electric moped svg; resolved relative to this module
const URL_ELECTRICMOPED = new URL('../../assets/icons/electricMoped.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electric moped icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricMoped.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricMopedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ELECTRICMOPED }, ...properties);
}

/**
 * Creates an electric moped icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricMopedIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricMopedIcon(element, ...properties);
    return element;
}
