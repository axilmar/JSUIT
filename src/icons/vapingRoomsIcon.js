import { initIcon } from "./icon.js";

//the url of the vaping rooms svg; resolved relative to this module
const URL_VAPINGROOMS = new URL('../../assets/icons/vapingRooms.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vaping rooms icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vapingRooms.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVapingRoomsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'vapingRoomsIcon', url: URL_VAPINGROOMS }, ...properties);
}

/**
 * Creates a vaping rooms icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vapingRoomsIcon = (...properties) => {
    const element = document.createElement('div');
    initVapingRoomsIcon(element, ...properties);
    return element;
}
