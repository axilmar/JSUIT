import { initIcon } from "./icon.js";

//the url of the repeat svg; resolved relative to this module
const URL_REPEAT = new URL('../../assets/icons/repeat.svg', import.meta.url).href;

/**
 * Initializes an icon element as a repeat icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/repeat.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRepeatIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'repeatIcon', url: URL_REPEAT }, ...properties);
}

/**
 * Creates a repeat icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const repeatIcon = (...properties) => {
    const element = document.createElement('div');
    initRepeatIcon(element, ...properties);
    return element;
}
