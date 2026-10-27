import { initIcon } from "./icon.js";

//the url of the four g plus mobiledata svg; resolved relative to this module
const URL_FOURGPLUSMOBILEDATA = new URL('../../assets/icons/fourGPlusMobiledata.svg', import.meta.url).href;

/**
 * Initializes an icon element as a four g plus mobiledata icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fourGPlusMobiledata.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFourGPlusMobiledataIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fourGPlusMobiledataIcon', url: URL_FOURGPLUSMOBILEDATA }, ...properties);
}

/**
 * Creates a four g plus mobiledata icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fourGPlusMobiledataIcon = (...properties) => {
    const element = document.createElement('div');
    initFourGPlusMobiledataIcon(element, ...properties);
    return element;
}
