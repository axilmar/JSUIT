import { initIcon } from "./icon.js";

//the url of the vertical shades outlined svg; resolved relative to this module
const URL_VERTICALSHADESOUTLINED = new URL('../../assets/icons/verticalShadesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vertical shades outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verticalShadesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerticalShadesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VERTICALSHADESOUTLINED }, ...properties);
}

/**
 * Creates a vertical shades outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verticalShadesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVerticalShadesOutlinedIcon(element, ...properties);
    return element;
}
