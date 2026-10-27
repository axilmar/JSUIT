import { initIcon } from "./icon.js";

//the url of the gavel outlined svg; resolved relative to this module
const URL_GAVELOUTLINED = new URL('../../assets/icons/gavelOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gavel outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gavelOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGavelOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gavelOutlinedIcon', url: URL_GAVELOUTLINED }, ...properties);
}

/**
 * Creates a gavel outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gavelOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGavelOutlinedIcon(element, ...properties);
    return element;
}
