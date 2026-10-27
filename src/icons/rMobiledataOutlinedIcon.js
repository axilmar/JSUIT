import { initIcon } from "./icon.js";

//the url of the r mobiledata outlined svg; resolved relative to this module
const URL_RMOBILEDATAOUTLINED = new URL('../../assets/icons/rMobiledataOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a r mobiledata outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rMobiledataOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRMobiledataOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rMobiledataOutlinedIcon', url: URL_RMOBILEDATAOUTLINED }, ...properties);
}

/**
 * Creates a r mobiledata outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rMobiledataOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRMobiledataOutlinedIcon(element, ...properties);
    return element;
}
