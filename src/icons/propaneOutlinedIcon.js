import { initIcon } from "./icon.js";

//the url of the propane outlined svg; resolved relative to this module
const URL_PROPANEOUTLINED = new URL('../../assets/icons/propaneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a propane outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/propaneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPropaneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PROPANEOUTLINED }, ...properties);
}

/**
 * Creates a propane outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const propaneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPropaneOutlinedIcon(element, ...properties);
    return element;
}
