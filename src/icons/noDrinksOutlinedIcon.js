import { initIcon } from "./icon.js";

//the url of the no drinks outlined svg; resolved relative to this module
const URL_NODRINKSOUTLINED = new URL('../../assets/icons/noDrinksOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no drinks outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noDrinksOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoDrinksOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NODRINKSOUTLINED }, ...properties);
}

/**
 * Creates a no drinks outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noDrinksOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoDrinksOutlinedIcon(element, ...properties);
    return element;
}
