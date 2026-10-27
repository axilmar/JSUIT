import { initIcon } from "./icon.js";

//the url of the gpp good svg; resolved relative to this module
const URL_GPPGOOD = new URL('../../assets/icons/gppGood.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gpp good icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gppGood.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGppGoodIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gppGoodIcon', url: URL_GPPGOOD }, ...properties);
}

/**
 * Creates a gpp good icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gppGoodIcon = (...properties) => {
    const element = document.createElement('div');
    initGppGoodIcon(element, ...properties);
    return element;
}
