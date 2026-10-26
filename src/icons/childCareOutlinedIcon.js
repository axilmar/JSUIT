import { initIcon } from "./icon.js";

//the url of the child care outlined svg; resolved relative to this module
const URL_CHILDCAREOUTLINED = new URL('../../assets/icons/childCareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a child care outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/childCareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChildCareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHILDCAREOUTLINED }, ...properties);
}

/**
 * Creates a child care outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const childCareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChildCareOutlinedIcon(element, ...properties);
    return element;
}
