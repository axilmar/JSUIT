import { initIcon } from "./icon.js";

//the url of the room service outlined svg; resolved relative to this module
const URL_ROOMSERVICEOUTLINED = new URL('../../assets/icons/roomServiceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a room service outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/roomServiceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRoomServiceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROOMSERVICEOUTLINED }, ...properties);
}

/**
 * Creates a room service outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const roomServiceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRoomServiceOutlinedIcon(element, ...properties);
    return element;
}
