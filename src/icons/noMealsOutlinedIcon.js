import { initIcon } from "./icon.js";

//the url of the no meals outlined svg; resolved relative to this module
const URL_NOMEALSOUTLINED = new URL('../../assets/icons/noMealsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no meals outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noMealsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoMealsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOMEALSOUTLINED }, ...properties);
}

/**
 * Creates a no meals outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noMealsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoMealsOutlinedIcon(element, ...properties);
    return element;
}
