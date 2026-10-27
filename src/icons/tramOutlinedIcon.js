import { initIcon } from "./icon.js";

//the url of the tram outlined svg; resolved relative to this module
const URL_TRAMOUTLINED = new URL('../../assets/icons/tramOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tram outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tramOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTramOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tramOutlinedIcon', url: URL_TRAMOUTLINED }, ...properties);
}

/**
 * Creates a tram outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tramOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTramOutlinedIcon(element, ...properties);
    return element;
}
