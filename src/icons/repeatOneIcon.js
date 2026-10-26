import { initIcon } from "./icon.js";

//the url of the repeat one svg; resolved relative to this module
const URL_REPEATONE = new URL('../../assets/icons/repeatOne.svg', import.meta.url).href;

/**
 * Initializes an icon element as a repeat one icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/repeatOne.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRepeatOneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REPEATONE }, ...properties);
}

/**
 * Creates a repeat one icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const repeatOneIcon = (...properties) => {
    const element = document.createElement('div');
    initRepeatOneIcon(element, ...properties);
    return element;
}
