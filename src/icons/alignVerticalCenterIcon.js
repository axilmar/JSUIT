import { initIcon } from "./icon.js";

//the url of the align vertical center svg; resolved relative to this module
const URL_ALIGNVERTICALCENTER = new URL('../../assets/icons/alignVerticalCenter.svg', import.meta.url).href;

/**
 * Initializes an icon element as an align vertical center icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alignVerticalCenter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlignVerticalCenterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'alignVerticalCenterIcon', url: URL_ALIGNVERTICALCENTER }, ...properties);
}

/**
 * Creates an align vertical center icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alignVerticalCenterIcon = (...properties) => {
    const element = document.createElement('div');
    initAlignVerticalCenterIcon(element, ...properties);
    return element;
}
