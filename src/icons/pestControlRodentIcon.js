import { initIcon } from "./icon.js";

//the url of the pest control rodent svg; resolved relative to this module
const URL_PESTCONTROLRODENT = new URL('../../assets/icons/pestControlRodent.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pest control rodent icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pestControlRodent.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPestControlRodentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pestControlRodentIcon', url: URL_PESTCONTROLRODENT }, ...properties);
}

/**
 * Creates a pest control rodent icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pestControlRodentIcon = (...properties) => {
    const element = document.createElement('div');
    initPestControlRodentIcon(element, ...properties);
    return element;
}
