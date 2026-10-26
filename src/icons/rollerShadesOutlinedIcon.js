import { initIcon } from "./icon.js";

//the url of the roller shades outlined svg; resolved relative to this module
const URL_ROLLERSHADESOUTLINED = new URL('../../assets/icons/rollerShadesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a roller shades outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rollerShadesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRollerShadesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROLLERSHADESOUTLINED }, ...properties);
}

/**
 * Creates a roller shades outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rollerShadesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRollerShadesOutlinedIcon(element, ...properties);
    return element;
}
