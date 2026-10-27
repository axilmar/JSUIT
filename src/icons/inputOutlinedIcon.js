import { initIcon } from "./icon.js";

//the url of the input outlined svg; resolved relative to this module
const URL_INPUTOUTLINED = new URL('../../assets/icons/inputOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an input outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/inputOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInputOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'inputOutlinedIcon', url: URL_INPUTOUTLINED }, ...properties);
}

/**
 * Creates an input outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const inputOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInputOutlinedIcon(element, ...properties);
    return element;
}
