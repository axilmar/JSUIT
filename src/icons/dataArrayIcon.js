import { initIcon } from "./icon.js";

//the url of the data array svg; resolved relative to this module
const URL_DATAARRAY = new URL('../../assets/icons/dataArray.svg', import.meta.url).href;

/**
 * Initializes an icon element as a data array icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dataArray.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDataArrayIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dataArrayIcon', url: URL_DATAARRAY }, ...properties);
}

/**
 * Creates a data array icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dataArrayIcon = (...properties) => {
    const element = document.createElement('div');
    initDataArrayIcon(element, ...properties);
    return element;
}
