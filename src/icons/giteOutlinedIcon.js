import { initIcon } from "./icon.js";

//the url of the gite outlined svg; resolved relative to this module
const URL_GITEOUTLINED = new URL('../../assets/icons/giteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gite outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/giteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGiteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'giteOutlinedIcon', url: URL_GITEOUTLINED }, ...properties);
}

/**
 * Creates a gite outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const giteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGiteOutlinedIcon(element, ...properties);
    return element;
}
