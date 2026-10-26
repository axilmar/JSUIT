import { initIcon } from "./icon.js";

//the url of the self improvement outlined svg; resolved relative to this module
const URL_SELFIMPROVEMENTOUTLINED = new URL('../../assets/icons/selfImprovementOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a self improvement outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/selfImprovementOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSelfImprovementOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SELFIMPROVEMENTOUTLINED }, ...properties);
}

/**
 * Creates a self improvement outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const selfImprovementOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSelfImprovementOutlinedIcon(element, ...properties);
    return element;
}
