import { initIcon } from "./icon.js";

//the url of the set meal outlined svg; resolved relative to this module
const URL_SETMEALOUTLINED = new URL('../../assets/icons/setMealOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a set meal outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/setMealOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSetMealOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETMEALOUTLINED }, ...properties);
}

/**
 * Creates a set meal outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const setMealOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSetMealOutlinedIcon(element, ...properties);
    return element;
}
