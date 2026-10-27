import { initIcon } from "./icon.js";

//the url of the local police svg; resolved relative to this module
const URL_LOCALPOLICE = new URL('../../assets/icons/localPolice.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local police icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localPolice.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalPoliceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localPoliceIcon', url: URL_LOCALPOLICE }, ...properties);
}

/**
 * Creates a local police icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localPoliceIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalPoliceIcon(element, ...properties);
    return element;
}
