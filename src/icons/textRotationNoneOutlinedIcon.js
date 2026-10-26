import { initIcon } from "./icon.js";

//the url of the text rotation none outlined svg; resolved relative to this module
const URL_TEXTROTATIONNONEOUTLINED = new URL('../../assets/icons/textRotationNoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text rotation none outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textRotationNoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextRotationNoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TEXTROTATIONNONEOUTLINED }, ...properties);
}

/**
 * Creates a text rotation none outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textRotationNoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTextRotationNoneOutlinedIcon(element, ...properties);
    return element;
}
