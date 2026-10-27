import { initIcon } from "./icon.js";

//the url of the curtains svg; resolved relative to this module
const URL_CURTAINS = new URL('../../assets/icons/curtains.svg', import.meta.url).href;

/**
 * Initializes an icon element as a curtains icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/curtains.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurtainsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'curtainsIcon', url: URL_CURTAINS }, ...properties);
}

/**
 * Creates a curtains icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const curtainsIcon = (...properties) => {
    const element = document.createElement('div');
    initCurtainsIcon(element, ...properties);
    return element;
}
