import { initIcon } from "./icon.js";

//the url of the outlined flag svg; resolved relative to this module
const URL_OUTLINEDFLAG = new URL('../../assets/icons/outlinedFlag.svg', import.meta.url).href;

/**
 * Initializes an icon element as an outlined flag icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/outlinedFlag.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutlinedFlagIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'outlinedFlagIcon', url: URL_OUTLINEDFLAG }, ...properties);
}

/**
 * Creates an outlined flag icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const outlinedFlagIcon = (...properties) => {
    const element = document.createElement('div');
    initOutlinedFlagIcon(element, ...properties);
    return element;
}
