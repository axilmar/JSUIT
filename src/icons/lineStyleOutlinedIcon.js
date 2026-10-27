import { initIcon } from "./icon.js";

//the url of the line style outlined svg; resolved relative to this module
const URL_LINESTYLEOUTLINED = new URL('../../assets/icons/lineStyleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a line style outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lineStyleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLineStyleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lineStyleOutlinedIcon', url: URL_LINESTYLEOUTLINED }, ...properties);
}

/**
 * Creates a line style outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lineStyleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLineStyleOutlinedIcon(element, ...properties);
    return element;
}
