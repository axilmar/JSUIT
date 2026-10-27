import { initIcon } from "./icon.js";

//the url of the egg alt outlined svg; resolved relative to this module
const URL_EGGALTOUTLINED = new URL('../../assets/icons/eggAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an egg alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eggAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEggAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eggAltOutlinedIcon', url: URL_EGGALTOUTLINED }, ...properties);
}

/**
 * Creates an egg alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eggAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEggAltOutlinedIcon(element, ...properties);
    return element;
}
