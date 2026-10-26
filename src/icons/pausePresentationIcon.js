import { initIcon } from "./icon.js";

//the url of the pause presentation svg; resolved relative to this module
const URL_PAUSEPRESENTATION = new URL('../../assets/icons/pausePresentation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pause presentation icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pausePresentation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPausePresentationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PAUSEPRESENTATION }, ...properties);
}

/**
 * Creates a pause presentation icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pausePresentationIcon = (...properties) => {
    const element = document.createElement('div');
    initPausePresentationIcon(element, ...properties);
    return element;
}
