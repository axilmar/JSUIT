import { initIcon } from "./icon.js";

//the url of the thirteen mp outlined svg; resolved relative to this module
const URL_THIRTEENMPOUTLINED = new URL('../../assets/icons/thirteenMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thirteen mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thirteenMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThirteenMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THIRTEENMPOUTLINED }, ...properties);
}

/**
 * Creates a thirteen mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thirteenMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThirteenMpOutlinedIcon(element, ...properties);
    return element;
}
