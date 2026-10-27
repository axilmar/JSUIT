import { initIcon } from "./icon.js";

//the url of the text rotation angleup outlined svg; resolved relative to this module
const URL_TEXTROTATIONANGLEUPOUTLINED = new URL('../../assets/icons/textRotationAngleupOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text rotation angleup outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textRotationAngleupOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextRotationAngleupOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'textRotationAngleupOutlinedIcon', url: URL_TEXTROTATIONANGLEUPOUTLINED }, ...properties);
}

/**
 * Creates a text rotation angleup outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textRotationAngleupOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTextRotationAngleupOutlinedIcon(element, ...properties);
    return element;
}
