import { initIcon } from "./icon.js";

//the url of the crop landscape svg; resolved relative to this module
const URL_CROPLANDSCAPE = new URL('../../assets/icons/cropLandscape.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop landscape icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropLandscape.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropLandscapeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cropLandscapeIcon', url: URL_CROPLANDSCAPE }, ...properties);
}

/**
 * Creates a crop landscape icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropLandscapeIcon = (...properties) => {
    const element = document.createElement('div');
    initCropLandscapeIcon(element, ...properties);
    return element;
}
