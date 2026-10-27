import { initIcon } from "./icon.js";

//the url of the title outlined svg; resolved relative to this module
const URL_TITLEOUTLINED = new URL('../../assets/icons/titleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a title outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/titleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTitleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'titleOutlinedIcon', url: URL_TITLEOUTLINED }, ...properties);
}

/**
 * Creates a title outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const titleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTitleOutlinedIcon(element, ...properties);
    return element;
}
