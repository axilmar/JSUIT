import { initIcon } from "./icon.js";

//the url of the dynamic form svg; resolved relative to this module
const URL_DYNAMICFORM = new URL('../../assets/icons/dynamicForm.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dynamic form icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dynamicForm.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDynamicFormIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dynamicFormIcon', url: URL_DYNAMICFORM }, ...properties);
}

/**
 * Creates a dynamic form icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dynamicFormIcon = (...properties) => {
    const element = document.createElement('div');
    initDynamicFormIcon(element, ...properties);
    return element;
}
