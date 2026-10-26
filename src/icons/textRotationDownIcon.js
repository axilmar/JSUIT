import { initIcon } from "./icon.js";

//the url of the text rotation down svg; resolved relative to this module
const URL_TEXTROTATIONDOWN = new URL('../../assets/icons/textRotationDown.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text rotation down icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textRotationDown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextRotationDownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TEXTROTATIONDOWN }, ...properties);
}

/**
 * Creates a text rotation down icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textRotationDownIcon = (...properties) => {
    const element = document.createElement('div');
    initTextRotationDownIcon(element, ...properties);
    return element;
}
