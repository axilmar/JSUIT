import { initIcon } from "./icon.js";

//the url of the engineering svg; resolved relative to this module
const URL_ENGINEERING = new URL('../../assets/icons/engineering.svg', import.meta.url).href;

/**
 * Initializes an icon element as an engineering icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/engineering.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEngineeringIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ENGINEERING }, ...properties);
}

/**
 * Creates an engineering icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const engineeringIcon = (...properties) => {
    const element = document.createElement('div');
    initEngineeringIcon(element, ...properties);
    return element;
}
