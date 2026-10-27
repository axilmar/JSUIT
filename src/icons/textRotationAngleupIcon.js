import { initIcon } from "./icon.js";

//the url of the text rotation angleup svg; resolved relative to this module
const URL_TEXTROTATIONANGLEUP = new URL('../../assets/icons/textRotationAngleup.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text rotation angleup icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textRotationAngleup.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextRotationAngleupIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'textRotationAngleupIcon', url: URL_TEXTROTATIONANGLEUP }, ...properties);
}

/**
 * Creates a text rotation angleup icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textRotationAngleupIcon = (...properties) => {
    const element = document.createElement('div');
    initTextRotationAngleupIcon(element, ...properties);
    return element;
}
