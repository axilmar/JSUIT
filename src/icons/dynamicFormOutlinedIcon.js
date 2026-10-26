import { initIcon } from "./icon.js";

//the url of the dynamic form outlined svg; resolved relative to this module
const URL_DYNAMICFORMOUTLINED = new URL('../../assets/icons/dynamicFormOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dynamic form outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dynamicFormOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDynamicFormOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DYNAMICFORMOUTLINED }, ...properties);
}

/**
 * Creates a dynamic form outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dynamicFormOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDynamicFormOutlinedIcon(element, ...properties);
    return element;
}
