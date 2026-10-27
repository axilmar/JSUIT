import { initIcon } from "./icon.js";

//the url of the height outlined svg; resolved relative to this module
const URL_HEIGHTOUTLINED = new URL('../../assets/icons/heightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a height outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/heightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'heightOutlinedIcon', url: URL_HEIGHTOUTLINED }, ...properties);
}

/**
 * Creates a height outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const heightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHeightOutlinedIcon(element, ...properties);
    return element;
}
