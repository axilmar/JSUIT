import { initIcon } from "./icon.js";

//the url of the co present outlined svg; resolved relative to this module
const URL_COPRESENTOUTLINED = new URL('../../assets/icons/coPresentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a co present outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/coPresentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCoPresentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COPRESENTOUTLINED }, ...properties);
}

/**
 * Creates a co present outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const coPresentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCoPresentOutlinedIcon(element, ...properties);
    return element;
}
