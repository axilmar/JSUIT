import { initIcon } from "./icon.js";

//the url of the fax outlined svg; resolved relative to this module
const URL_FAXOUTLINED = new URL('../../assets/icons/faxOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fax outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/faxOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFaxOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'faxOutlinedIcon', url: URL_FAXOUTLINED }, ...properties);
}

/**
 * Creates a fax outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const faxOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFaxOutlinedIcon(element, ...properties);
    return element;
}
