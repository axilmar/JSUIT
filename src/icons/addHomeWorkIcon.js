import { initIcon } from "./icon.js";

//the url of the add home work svg; resolved relative to this module
const URL_ADDHOMEWORK = new URL('../../assets/icons/addHomeWork.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add home work icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addHomeWork.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddHomeWorkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addHomeWorkIcon', url: URL_ADDHOMEWORK }, ...properties);
}

/**
 * Creates an add home work icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addHomeWorkIcon = (...properties) => {
    const element = document.createElement('div');
    initAddHomeWorkIcon(element, ...properties);
    return element;
}
