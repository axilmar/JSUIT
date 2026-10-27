import { initIcon } from "./icon.js";

//the url of the no meeting room svg; resolved relative to this module
const URL_NOMEETINGROOM = new URL('../../assets/icons/noMeetingRoom.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no meeting room icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noMeetingRoom.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoMeetingRoomIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noMeetingRoomIcon', url: URL_NOMEETINGROOM }, ...properties);
}

/**
 * Creates a no meeting room icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noMeetingRoomIcon = (...properties) => {
    const element = document.createElement('div');
    initNoMeetingRoomIcon(element, ...properties);
    return element;
}
