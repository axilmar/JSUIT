import { initIcon } from "./icon.js";

//the url of the forest outlined svg; resolved relative to this module
const URL_FORESTOUTLINED = new URL('../../assets/icons/forestOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a forest outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forestOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForestOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORESTOUTLINED }, ...properties);
}

/**
 * Creates a forest outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forestOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initForestOutlinedIcon(element, ...properties);
    return element;
}
