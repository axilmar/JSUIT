import { initIcon } from "./icon.js";

//the url of the align horizontal center svg; resolved relative to this module
const URL_ALIGNHORIZONTALCENTER = new URL('../../assets/icons/alignHorizontalCenter.svg', import.meta.url).href;

/**
 * Initializes an icon element as an align horizontal center icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alignHorizontalCenter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlignHorizontalCenterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALIGNHORIZONTALCENTER }, ...properties);
}

/**
 * Creates an align horizontal center icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alignHorizontalCenterIcon = (...properties) => {
    const element = document.createElement('div');
    initAlignHorizontalCenterIcon(element, ...properties);
    return element;
}
