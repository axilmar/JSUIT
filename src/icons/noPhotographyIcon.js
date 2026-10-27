import { initIcon } from "./icon.js";

//the url of the no photography svg; resolved relative to this module
const URL_NOPHOTOGRAPHY = new URL('../../assets/icons/noPhotography.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no photography icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noPhotography.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoPhotographyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noPhotographyIcon', url: URL_NOPHOTOGRAPHY }, ...properties);
}

/**
 * Creates a no photography icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noPhotographyIcon = (...properties) => {
    const element = document.createElement('div');
    initNoPhotographyIcon(element, ...properties);
    return element;
}
