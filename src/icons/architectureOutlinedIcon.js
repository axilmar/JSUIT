import { initIcon } from "./icon.js";

//the url of the architecture outlined svg; resolved relative to this module
const URL_ARCHITECTUREOUTLINED = new URL('../../assets/icons/architectureOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an architecture outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/architectureOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArchitectureOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'architectureOutlinedIcon', url: URL_ARCHITECTUREOUTLINED }, ...properties);
}

/**
 * Creates an architecture outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const architectureOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArchitectureOutlinedIcon(element, ...properties);
    return element;
}
