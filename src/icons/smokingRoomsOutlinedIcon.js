import { initIcon } from "./icon.js";

//the url of the smoking rooms outlined svg; resolved relative to this module
const URL_SMOKINGROOMSOUTLINED = new URL('../../assets/icons/smokingRoomsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a smoking rooms outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smokingRoomsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmokingRoomsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SMOKINGROOMSOUTLINED }, ...properties);
}

/**
 * Creates a smoking rooms outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smokingRoomsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSmokingRoomsOutlinedIcon(element, ...properties);
    return element;
}
