import { initIcon } from "./icon.js";

//the url of the pause presentation outlined svg; resolved relative to this module
const URL_PAUSEPRESENTATIONOUTLINED = new URL('../../assets/icons/pausePresentationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pause presentation outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pausePresentationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPausePresentationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PAUSEPRESENTATIONOUTLINED }, ...properties);
}

/**
 * Creates a pause presentation outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pausePresentationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPausePresentationOutlinedIcon(element, ...properties);
    return element;
}
