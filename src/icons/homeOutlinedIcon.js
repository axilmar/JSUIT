import { initIcon } from "./icon.js";

//the url of the home outlined svg; resolved relative to this module
const URL_HOMEOUTLINED = new URL('../../assets/icons/homeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a home outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/homeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHomeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'homeOutlinedIcon', url: URL_HOMEOUTLINED }, ...properties);
}

/**
 * Creates a home outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const homeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHomeOutlinedIcon(element, ...properties);
    return element;
}
