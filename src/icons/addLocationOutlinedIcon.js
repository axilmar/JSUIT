import { initIcon } from "./icon.js";

//the url of the add location outlined svg; resolved relative to this module
const URL_ADDLOCATIONOUTLINED = new URL('../../assets/icons/addLocationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add location outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addLocationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddLocationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addLocationOutlinedIcon', url: URL_ADDLOCATIONOUTLINED }, ...properties);
}

/**
 * Creates an add location outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addLocationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddLocationOutlinedIcon(element, ...properties);
    return element;
}
