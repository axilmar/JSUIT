import { initIcon } from "./icon.js";

//the url of the local parking svg; resolved relative to this module
const URL_LOCALPARKING = new URL('../../assets/icons/localParking.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local parking icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localParking.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalParkingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALPARKING }, ...properties);
}

/**
 * Creates a local parking icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localParkingIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalParkingIcon(element, ...properties);
    return element;
}
