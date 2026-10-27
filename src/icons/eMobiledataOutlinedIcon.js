import { initIcon } from "./icon.js";

//the url of the e mobiledata outlined svg; resolved relative to this module
const URL_EMOBILEDATAOUTLINED = new URL('../../assets/icons/eMobiledataOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an e mobiledata outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eMobiledataOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEMobiledataOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eMobiledataOutlinedIcon', url: URL_EMOBILEDATAOUTLINED }, ...properties);
}

/**
 * Creates an e mobiledata outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eMobiledataOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEMobiledataOutlinedIcon(element, ...properties);
    return element;
}
