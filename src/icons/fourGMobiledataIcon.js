import { initIcon } from "./icon.js";

//the url of the four g mobiledata svg; resolved relative to this module
const URL_FOURGMOBILEDATA = new URL('../../assets/icons/fourGMobiledata.svg', import.meta.url).href;

/**
 * Initializes an icon element as a four g mobiledata icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fourGMobiledata.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFourGMobiledataIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fourGMobiledataIcon', url: URL_FOURGMOBILEDATA }, ...properties);
}

/**
 * Creates a four g mobiledata icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fourGMobiledataIcon = (...properties) => {
    const element = document.createElement('div');
    initFourGMobiledataIcon(element, ...properties);
    return element;
}
