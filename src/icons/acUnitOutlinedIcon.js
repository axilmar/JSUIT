import { initIcon } from "./icon.js";

//the url of the ac unit outlined svg; resolved relative to this module
const URL_ACUNITOUTLINED = new URL('../../assets/icons/acUnitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ac unit outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/acUnitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAcUnitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ACUNITOUTLINED }, ...properties);
}

/**
 * Creates an ac unit outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const acUnitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAcUnitOutlinedIcon(element, ...properties);
    return element;
}
