import { initIcon } from "./icon.js";

//the url of the local taxi outlined svg; resolved relative to this module
const URL_LOCALTAXIOUTLINED = new URL('../../assets/icons/localTaxiOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local taxi outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localTaxiOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalTaxiOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localTaxiOutlinedIcon', url: URL_LOCALTAXIOUTLINED }, ...properties);
}

/**
 * Creates a local taxi outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localTaxiOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalTaxiOutlinedIcon(element, ...properties);
    return element;
}
