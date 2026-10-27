import { initIcon } from "./icon.js";

//the url of the edgesensor high svg; resolved relative to this module
const URL_EDGESENSORHIGH = new URL('../../assets/icons/edgesensorHigh.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edgesensor high icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/edgesensorHigh.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEdgesensorHighIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'edgesensorHighIcon', url: URL_EDGESENSORHIGH }, ...properties);
}

/**
 * Creates an edgesensor high icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const edgesensorHighIcon = (...properties) => {
    const element = document.createElement('div');
    initEdgesensorHighIcon(element, ...properties);
    return element;
}
