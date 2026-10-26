import { initIcon } from "./icon.js";

//the url of the lte mobiledata outlined svg; resolved relative to this module
const URL_LTEMOBILEDATAOUTLINED = new URL('../../assets/icons/lteMobiledataOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lte mobiledata outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lteMobiledataOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLteMobiledataOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LTEMOBILEDATAOUTLINED }, ...properties);
}

/**
 * Creates a lte mobiledata outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lteMobiledataOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLteMobiledataOutlinedIcon(element, ...properties);
    return element;
}
