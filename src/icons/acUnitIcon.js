import { initIcon } from "./icon.js";

//the url of the ac unit svg; resolved relative to this module
const URL_ACUNIT = new URL('../../assets/icons/acUnit.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ac unit icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/acUnit.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAcUnitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ACUNIT }, ...properties);
}

/**
 * Creates an ac unit icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const acUnitIcon = (...properties) => {
    const element = document.createElement('div');
    initAcUnitIcon(element, ...properties);
    return element;
}
