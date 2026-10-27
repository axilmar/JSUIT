import { initIcon } from "./icon.js";

//the url of the photo camera front outlined svg; resolved relative to this module
const URL_PHOTOCAMERAFRONTOUTLINED = new URL('../../assets/icons/photoCameraFrontOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo camera front outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoCameraFrontOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoCameraFrontOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'photoCameraFrontOutlinedIcon', url: URL_PHOTOCAMERAFRONTOUTLINED }, ...properties);
}

/**
 * Creates a photo camera front outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoCameraFrontOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoCameraFrontOutlinedIcon(element, ...properties);
    return element;
}
