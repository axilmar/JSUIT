import { initIcon } from "./icon.js";

//the url of the room service svg; resolved relative to this module
const URL_ROOMSERVICE = new URL('../../assets/icons/roomService.svg', import.meta.url).href;

/**
 * Initializes an icon element as a room service icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/roomService.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRoomServiceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'roomServiceIcon', url: URL_ROOMSERVICE }, ...properties);
}

/**
 * Creates a room service icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const roomServiceIcon = (...properties) => {
    const element = document.createElement('div');
    initRoomServiceIcon(element, ...properties);
    return element;
}
