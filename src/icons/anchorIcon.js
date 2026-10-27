import { initIcon } from "./icon.js";

//the url of the anchor svg; resolved relative to this module
const URL_ANCHOR = new URL('../../assets/icons/anchor.svg', import.meta.url).href;

/**
 * Initializes an icon element as an anchor icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/anchor.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAnchorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'anchorIcon', url: URL_ANCHOR }, ...properties);
}

/**
 * Creates an anchor icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const anchorIcon = (...properties) => {
    const element = document.createElement('div');
    initAnchorIcon(element, ...properties);
    return element;
}
