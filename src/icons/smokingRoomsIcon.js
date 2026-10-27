import { initIcon } from "./icon.js";

//the url of the smoking rooms svg; resolved relative to this module
const URL_SMOKINGROOMS = new URL('../../assets/icons/smokingRooms.svg', import.meta.url).href;

/**
 * Initializes an icon element as a smoking rooms icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smokingRooms.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmokingRoomsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'smokingRoomsIcon', url: URL_SMOKINGROOMS }, ...properties);
}

/**
 * Creates a smoking rooms icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smokingRoomsIcon = (...properties) => {
    const element = document.createElement('div');
    initSmokingRoomsIcon(element, ...properties);
    return element;
}
