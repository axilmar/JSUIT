import { initIcon } from "./icon.js";

//the url of the local pharmacy outlined svg; resolved relative to this module
const URL_LOCALPHARMACYOUTLINED = new URL('../../assets/icons/localPharmacyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local pharmacy outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localPharmacyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalPharmacyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localPharmacyOutlinedIcon', url: URL_LOCALPHARMACYOUTLINED }, ...properties);
}

/**
 * Creates a local pharmacy outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localPharmacyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalPharmacyOutlinedIcon(element, ...properties);
    return element;
}
