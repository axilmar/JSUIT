import { initIcon } from "./icon.js";

//the url of the align horizontal right svg; resolved relative to this module
const URL_ALIGNHORIZONTALRIGHT = new URL('../../assets/icons/alignHorizontalRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as an align horizontal right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alignHorizontalRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlignHorizontalRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALIGNHORIZONTALRIGHT }, ...properties);
}

/**
 * Creates an align horizontal right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alignHorizontalRightIcon = (...properties) => {
    const element = document.createElement('div');
    initAlignHorizontalRightIcon(element, ...properties);
    return element;
}
