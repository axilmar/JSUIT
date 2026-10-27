import { initIcon } from "./icon.js";

//the url of the local atm outlined svg; resolved relative to this module
const URL_LOCALATMOUTLINED = new URL('../../assets/icons/localAtmOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local atm outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localAtmOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalAtmOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localAtmOutlinedIcon', url: URL_LOCALATMOUTLINED }, ...properties);
}

/**
 * Creates a local atm outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localAtmOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalAtmOutlinedIcon(element, ...properties);
    return element;
}
