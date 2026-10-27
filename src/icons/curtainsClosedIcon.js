import { initIcon } from "./icon.js";

//the url of the curtains closed svg; resolved relative to this module
const URL_CURTAINSCLOSED = new URL('../../assets/icons/curtainsClosed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a curtains closed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/curtainsClosed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurtainsClosedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'curtainsClosedIcon', url: URL_CURTAINSCLOSED }, ...properties);
}

/**
 * Creates a curtains closed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const curtainsClosedIcon = (...properties) => {
    const element = document.createElement('div');
    initCurtainsClosedIcon(element, ...properties);
    return element;
}
