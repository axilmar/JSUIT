import { initIcon } from "./icon.js";

//the url of the photo camera front svg; resolved relative to this module
const URL_PHOTOCAMERAFRONT = new URL('../../assets/icons/photoCameraFront.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo camera front icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoCameraFront.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoCameraFrontIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'photoCameraFrontIcon', url: URL_PHOTOCAMERAFRONT }, ...properties);
}

/**
 * Creates a photo camera front icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoCameraFrontIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoCameraFrontIcon(element, ...properties);
    return element;
}
