import { initIcon } from "./icon.js";

//the url of the room svg; resolved relative to this module
const URL_ROOM = new URL('../../assets/icons/room.svg', import.meta.url).href;

/**
 * Initializes an icon element as a room icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/room.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRoomIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'roomIcon', url: URL_ROOM }, ...properties);
}

/**
 * Creates a room icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const roomIcon = (...properties) => {
    const element = document.createElement('div');
    initRoomIcon(element, ...properties);
    return element;
}
