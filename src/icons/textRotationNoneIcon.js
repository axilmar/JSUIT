import { initIcon } from "./icon.js";

//the url of the text rotation none svg; resolved relative to this module
const URL_TEXTROTATIONNONE = new URL('../../assets/icons/textRotationNone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text rotation none icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textRotationNone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextRotationNoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'textRotationNoneIcon', url: URL_TEXTROTATIONNONE }, ...properties);
}

/**
 * Creates a text rotation none icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textRotationNoneIcon = (...properties) => {
    const element = document.createElement('div');
    initTextRotationNoneIcon(element, ...properties);
    return element;
}
