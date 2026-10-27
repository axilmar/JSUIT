import { initIcon } from "./icon.js";

//the url of the meeting room outlined svg; resolved relative to this module
const URL_MEETINGROOMOUTLINED = new URL('../../assets/icons/meetingRoomOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a meeting room outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/meetingRoomOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMeetingRoomOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'meetingRoomOutlinedIcon', url: URL_MEETINGROOMOUTLINED }, ...properties);
}

/**
 * Creates a meeting room outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const meetingRoomOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMeetingRoomOutlinedIcon(element, ...properties);
    return element;
}
