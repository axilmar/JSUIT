import { initIcon } from "./icon.js";

//the url of the living outlined svg; resolved relative to this module
const URL_LIVINGOUTLINED = new URL('../../assets/icons/livingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a living outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/livingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLivingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LIVINGOUTLINED }, ...properties);
}

/**
 * Creates a living outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const livingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLivingOutlinedIcon(element, ...properties);
    return element;
}
