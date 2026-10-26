import { initIcon } from "./icon.js";

//the url of the door back outlined svg; resolved relative to this module
const URL_DOORBACKOUTLINED = new URL('../../assets/icons/doorBackOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a door back outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doorBackOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoorBackOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOORBACKOUTLINED }, ...properties);
}

/**
 * Creates a door back outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doorBackOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoorBackOutlinedIcon(element, ...properties);
    return element;
}
