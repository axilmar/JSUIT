import { initIcon } from "./icon.js";

//the url of the gpp bad svg; resolved relative to this module
const URL_GPPBAD = new URL('../../assets/icons/gppBad.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gpp bad icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gppBad.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGppBadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gppBadIcon', url: URL_GPPBAD }, ...properties);
}

/**
 * Creates a gpp bad icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gppBadIcon = (...properties) => {
    const element = document.createElement('div');
    initGppBadIcon(element, ...properties);
    return element;
}
