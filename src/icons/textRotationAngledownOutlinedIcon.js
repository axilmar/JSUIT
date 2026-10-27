import { initIcon } from "./icon.js";

//the url of the text rotation angledown outlined svg; resolved relative to this module
const URL_TEXTROTATIONANGLEDOWNOUTLINED = new URL('../../assets/icons/textRotationAngledownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text rotation angledown outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textRotationAngledownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextRotationAngledownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'textRotationAngledownOutlinedIcon', url: URL_TEXTROTATIONANGLEDOWNOUTLINED }, ...properties);
}

/**
 * Creates a text rotation angledown outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textRotationAngledownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTextRotationAngledownOutlinedIcon(element, ...properties);
    return element;
}
