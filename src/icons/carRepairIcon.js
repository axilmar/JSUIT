import { initIcon } from "./icon.js";

//the url of the car repair svg; resolved relative to this module
const URL_CARREPAIR = new URL('../../assets/icons/carRepair.svg', import.meta.url).href;

/**
 * Initializes an icon element as a car repair icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/carRepair.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCarRepairIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CARREPAIR }, ...properties);
}

/**
 * Creates a car repair icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const carRepairIcon = (...properties) => {
    const element = document.createElement('div');
    initCarRepairIcon(element, ...properties);
    return element;
}
