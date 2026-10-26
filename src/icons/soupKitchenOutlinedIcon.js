import { initIcon } from "./icon.js";

//the url of the soup kitchen outlined svg; resolved relative to this module
const URL_SOUPKITCHENOUTLINED = new URL('../../assets/icons/soupKitchenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a soup kitchen outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/soupKitchenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSoupKitchenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOUPKITCHENOUTLINED }, ...properties);
}

/**
 * Creates a soup kitchen outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const soupKitchenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSoupKitchenOutlinedIcon(element, ...properties);
    return element;
}
