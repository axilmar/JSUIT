import { initIcon } from "./icon.js";

//the url of the architecture svg; resolved relative to this module
const URL_ARCHITECTURE = new URL('../../assets/icons/architecture.svg', import.meta.url).href;

/**
 * Initializes an icon element as an architecture icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/architecture.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArchitectureIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARCHITECTURE }, ...properties);
}

/**
 * Creates an architecture icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const architectureIcon = (...properties) => {
    const element = document.createElement('div');
    initArchitectureIcon(element, ...properties);
    return element;
}
