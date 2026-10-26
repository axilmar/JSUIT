import { initIcon } from "./icon.js";

//the url of the four g mobiledata outlined svg; resolved relative to this module
const URL_FOURGMOBILEDATAOUTLINED = new URL('../../assets/icons/fourGMobiledataOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a four g mobiledata outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fourGMobiledataOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFourGMobiledataOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FOURGMOBILEDATAOUTLINED }, ...properties);
}

/**
 * Creates a four g mobiledata outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fourGMobiledataOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFourGMobiledataOutlinedIcon(element, ...properties);
    return element;
}
