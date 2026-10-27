import { initIcon } from "./icon.js";

//the url of the fact check svg; resolved relative to this module
const URL_FACTCHECK = new URL('../../assets/icons/factCheck.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fact check icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/factCheck.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFactCheckIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'factCheckIcon', url: URL_FACTCHECK }, ...properties);
}

/**
 * Creates a fact check icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const factCheckIcon = (...properties) => {
    const element = document.createElement('div');
    initFactCheckIcon(element, ...properties);
    return element;
}
