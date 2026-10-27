import { initIcon } from "./icon.js";

//the url of the g mobiledata outlined svg; resolved relative to this module
const URL_GMOBILEDATAOUTLINED = new URL('../../assets/icons/gMobiledataOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a g mobiledata outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gMobiledataOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGMobiledataOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gMobiledataOutlinedIcon', url: URL_GMOBILEDATAOUTLINED }, ...properties);
}

/**
 * Creates a g mobiledata outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gMobiledataOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGMobiledataOutlinedIcon(element, ...properties);
    return element;
}
