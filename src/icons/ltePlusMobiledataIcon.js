import { initIcon } from "./icon.js";

//the url of the lte plus mobiledata svg; resolved relative to this module
const URL_LTEPLUSMOBILEDATA = new URL('../../assets/icons/ltePlusMobiledata.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lte plus mobiledata icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ltePlusMobiledata.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLtePlusMobiledataIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LTEPLUSMOBILEDATA }, ...properties);
}

/**
 * Creates a lte plus mobiledata icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ltePlusMobiledataIcon = (...properties) => {
    const element = document.createElement('div');
    initLtePlusMobiledataIcon(element, ...properties);
    return element;
}
