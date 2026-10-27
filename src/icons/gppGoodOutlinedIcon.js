import { initIcon } from "./icon.js";

//the url of the gpp good outlined svg; resolved relative to this module
const URL_GPPGOODOUTLINED = new URL('../../assets/icons/gppGoodOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gpp good outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gppGoodOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGppGoodOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gppGoodOutlinedIcon', url: URL_GPPGOODOUTLINED }, ...properties);
}

/**
 * Creates a gpp good outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gppGoodOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGppGoodOutlinedIcon(element, ...properties);
    return element;
}
