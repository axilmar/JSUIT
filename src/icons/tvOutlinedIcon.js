import { initIcon } from "./icon.js";

//the url of the tv outlined svg; resolved relative to this module
const URL_TVOUTLINED = new URL('../../assets/icons/tvOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tv outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tvOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTvOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tvOutlinedIcon', url: URL_TVOUTLINED }, ...properties);
}

/**
 * Creates a tv outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tvOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTvOutlinedIcon(element, ...properties);
    return element;
}
