import { initIcon } from "./icon.js";

//the url of the visibility off outlined svg; resolved relative to this module
const URL_VISIBILITYOFFOUTLINED = new URL('../../assets/icons/visibilityOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a visibility off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/visibilityOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVisibilityOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'visibilityOffOutlinedIcon', url: URL_VISIBILITYOFFOUTLINED }, ...properties);
}

/**
 * Creates a visibility off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const visibilityOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVisibilityOffOutlinedIcon(element, ...properties);
    return element;
}
