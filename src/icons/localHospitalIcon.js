import { initIcon } from "./icon.js";

//the url of the local hospital svg; resolved relative to this module
const URL_LOCALHOSPITAL = new URL('../../assets/icons/localHospital.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local hospital icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localHospital.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalHospitalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localHospitalIcon', url: URL_LOCALHOSPITAL }, ...properties);
}

/**
 * Creates a local hospital icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localHospitalIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalHospitalIcon(element, ...properties);
    return element;
}
