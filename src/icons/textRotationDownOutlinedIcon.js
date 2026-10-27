import { initIcon } from "./icon.js";

//the url of the text rotation down outlined svg; resolved relative to this module
const URL_TEXTROTATIONDOWNOUTLINED = new URL('../../assets/icons/textRotationDownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text rotation down outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textRotationDownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextRotationDownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'textRotationDownOutlinedIcon', url: URL_TEXTROTATIONDOWNOUTLINED }, ...properties);
}

/**
 * Creates a text rotation down outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textRotationDownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTextRotationDownOutlinedIcon(element, ...properties);
    return element;
}
