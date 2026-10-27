import { initIcon } from "./icon.js";

//the url of the four k outlined svg; resolved relative to this module
const URL_FOURKOUTLINED = new URL('../../assets/icons/fourKOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a four k outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fourKOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFourKOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fourKOutlinedIcon', url: URL_FOURKOUTLINED }, ...properties);
}

/**
 * Creates a four k outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fourKOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFourKOutlinedIcon(element, ...properties);
    return element;
}
