import { initIcon } from "./icon.js";

//the url of the repeat on svg; resolved relative to this module
const URL_REPEATON = new URL('../../assets/icons/repeatOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a repeat on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/repeatOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRepeatOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'repeatOnIcon', url: URL_REPEATON }, ...properties);
}

/**
 * Creates a repeat on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const repeatOnIcon = (...properties) => {
    const element = document.createElement('div');
    initRepeatOnIcon(element, ...properties);
    return element;
}
