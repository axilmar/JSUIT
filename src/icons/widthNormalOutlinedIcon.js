import { initIcon } from "./icon.js";

//the url of the width normal outlined svg; resolved relative to this module
const URL_WIDTHNORMALOUTLINED = new URL('../../assets/icons/widthNormalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a width normal outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/widthNormalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWidthNormalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIDTHNORMALOUTLINED }, ...properties);
}

/**
 * Creates a width normal outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const widthNormalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWidthNormalOutlinedIcon(element, ...properties);
    return element;
}
