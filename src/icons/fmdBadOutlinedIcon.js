import { initIcon } from "./icon.js";

//the url of the fmd bad outlined svg; resolved relative to this module
const URL_FMDBADOUTLINED = new URL('../../assets/icons/fmdBadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fmd bad outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fmdBadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFmdBadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fmdBadOutlinedIcon', url: URL_FMDBADOUTLINED }, ...properties);
}

/**
 * Creates a fmd bad outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fmdBadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFmdBadOutlinedIcon(element, ...properties);
    return element;
}
