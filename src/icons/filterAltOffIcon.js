import { initIcon } from "./icon.js";

//the url of the filter alt off svg; resolved relative to this module
const URL_FILTERALTOFF = new URL('../../assets/icons/filterAltOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter alt off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterAltOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterAltOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filterAltOffIcon', url: URL_FILTERALTOFF }, ...properties);
}

/**
 * Creates a filter alt off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterAltOffIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterAltOffIcon(element, ...properties);
    return element;
}
