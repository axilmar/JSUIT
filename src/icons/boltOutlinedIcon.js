import { initIcon } from "./icon.js";

//the url of the bolt outlined svg; resolved relative to this module
const URL_BOLTOUTLINED = new URL('../../assets/icons/boltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bolt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/boltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBoltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BOLTOUTLINED }, ...properties);
}

/**
 * Creates a bolt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const boltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBoltOutlinedIcon(element, ...properties);
    return element;
}
