import { initIcon } from "./icon.js";

//the url of the flip to back outlined svg; resolved relative to this module
const URL_FLIPTOBACKOUTLINED = new URL('../../assets/icons/flipToBackOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flip to back outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flipToBackOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlipToBackOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flipToBackOutlinedIcon', url: URL_FLIPTOBACKOUTLINED }, ...properties);
}

/**
 * Creates a flip to back outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flipToBackOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlipToBackOutlinedIcon(element, ...properties);
    return element;
}
