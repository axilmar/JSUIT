import { initIcon } from "./icon.js";

//the url of the add ic call outlined svg; resolved relative to this module
const URL_ADDICCALLOUTLINED = new URL('../../assets/icons/addIcCallOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add ic call outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addIcCallOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddIcCallOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addIcCallOutlinedIcon', url: URL_ADDICCALLOUTLINED }, ...properties);
}

/**
 * Creates an add ic call outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addIcCallOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddIcCallOutlinedIcon(element, ...properties);
    return element;
}
