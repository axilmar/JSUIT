import { initIcon } from "./icon.js";

//the url of the blind outlined svg; resolved relative to this module
const URL_BLINDOUTLINED = new URL('../../assets/icons/blindOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blind outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blindOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlindOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLINDOUTLINED }, ...properties);
}

/**
 * Creates a blind outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blindOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBlindOutlinedIcon(element, ...properties);
    return element;
}
