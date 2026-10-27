import { initIcon } from "./icon.js";

//the url of the wash outlined svg; resolved relative to this module
const URL_WASHOUTLINED = new URL('../../assets/icons/washOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wash outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/washOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWashOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'washOutlinedIcon', url: URL_WASHOUTLINED }, ...properties);
}

/**
 * Creates a wash outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const washOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWashOutlinedIcon(element, ...properties);
    return element;
}
