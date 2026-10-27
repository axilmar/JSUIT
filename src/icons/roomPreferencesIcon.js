import { initIcon } from "./icon.js";

//the url of the room preferences svg; resolved relative to this module
const URL_ROOMPREFERENCES = new URL('../../assets/icons/roomPreferences.svg', import.meta.url).href;

/**
 * Initializes an icon element as a room preferences icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/roomPreferences.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRoomPreferencesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'roomPreferencesIcon', url: URL_ROOMPREFERENCES }, ...properties);
}

/**
 * Creates a room preferences icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const roomPreferencesIcon = (...properties) => {
    const element = document.createElement('div');
    initRoomPreferencesIcon(element, ...properties);
    return element;
}
