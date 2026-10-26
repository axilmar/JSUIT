import { initIcon } from "./icon.js";

//the url of the meeting room svg; resolved relative to this module
const URL_MEETINGROOM = new URL('../../assets/icons/meetingRoom.svg', import.meta.url).href;

/**
 * Initializes an icon element as a meeting room icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/meetingRoom.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMeetingRoomIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MEETINGROOM }, ...properties);
}

/**
 * Creates a meeting room icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const meetingRoomIcon = (...properties) => {
    const element = document.createElement('div');
    initMeetingRoomIcon(element, ...properties);
    return element;
}
