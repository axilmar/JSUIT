import { initIcon } from "./icon.js";

//the url of the tire repair outlined svg; resolved relative to this module
const URL_TIREREPAIROUTLINED = new URL('../../assets/icons/tireRepairOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tire repair outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tireRepairOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTireRepairOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tireRepairOutlinedIcon', url: URL_TIREREPAIROUTLINED }, ...properties);
}

/**
 * Creates a tire repair outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tireRepairOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTireRepairOutlinedIcon(element, ...properties);
    return element;
}
