import { initIcon } from "./icon.js";

//the url of the bathroom outlined svg; resolved relative to this module
const URL_BATHROOMOUTLINED = new URL('../../assets/icons/bathroomOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bathroom outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bathroomOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBathroomOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATHROOMOUTLINED }, ...properties);
}

/**
 * Creates a bathroom outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bathroomOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBathroomOutlinedIcon(element, ...properties);
    return element;
}
