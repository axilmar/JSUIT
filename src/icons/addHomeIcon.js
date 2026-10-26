import { initIcon } from "./icon.js";

//the url of the add home svg; resolved relative to this module
const URL_ADDHOME = new URL('../../assets/icons/addHome.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add home icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addHome.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddHomeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDHOME }, ...properties);
}

/**
 * Creates an add home icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addHomeIcon = (...properties) => {
    const element = document.createElement('div');
    initAddHomeIcon(element, ...properties);
    return element;
}
