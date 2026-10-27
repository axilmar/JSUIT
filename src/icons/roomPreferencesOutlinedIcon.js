import { initIcon } from "./icon.js";

//the url of the room preferences outlined svg; resolved relative to this module
const URL_ROOMPREFERENCESOUTLINED = new URL('../../assets/icons/roomPreferencesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a room preferences outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/roomPreferencesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRoomPreferencesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'roomPreferencesOutlinedIcon', url: URL_ROOMPREFERENCESOUTLINED }, ...properties);
}

/**
 * Creates a room preferences outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const roomPreferencesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRoomPreferencesOutlinedIcon(element, ...properties);
    return element;
}
