import { initIcon } from "./icon.js";

//the url of the tire repair svg; resolved relative to this module
const URL_TIREREPAIR = new URL('../../assets/icons/tireRepair.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tire repair icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tireRepair.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTireRepairIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TIREREPAIR }, ...properties);
}

/**
 * Creates a tire repair icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tireRepairIcon = (...properties) => {
    const element = document.createElement('div');
    initTireRepairIcon(element, ...properties);
    return element;
}
