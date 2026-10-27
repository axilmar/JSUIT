import { initIcon } from "./icon.js";

//the url of the contactless outlined svg; resolved relative to this module
const URL_CONTACTLESSOUTLINED = new URL('../../assets/icons/contactlessOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contactless outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contactlessOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContactlessOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contactlessOutlinedIcon', url: URL_CONTACTLESSOUTLINED }, ...properties);
}

/**
 * Creates a contactless outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contactlessOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initContactlessOutlinedIcon(element, ...properties);
    return element;
}
