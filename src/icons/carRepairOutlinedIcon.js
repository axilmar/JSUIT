import { initIcon } from "./icon.js";

//the url of the car repair outlined svg; resolved relative to this module
const URL_CARREPAIROUTLINED = new URL('../../assets/icons/carRepairOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a car repair outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/carRepairOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCarRepairOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CARREPAIROUTLINED }, ...properties);
}

/**
 * Creates a car repair outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const carRepairOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCarRepairOutlinedIcon(element, ...properties);
    return element;
}
