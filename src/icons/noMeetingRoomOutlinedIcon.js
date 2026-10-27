import { initIcon } from "./icon.js";

//the url of the no meeting room outlined svg; resolved relative to this module
const URL_NOMEETINGROOMOUTLINED = new URL('../../assets/icons/noMeetingRoomOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no meeting room outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noMeetingRoomOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoMeetingRoomOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noMeetingRoomOutlinedIcon', url: URL_NOMEETINGROOMOUTLINED }, ...properties);
}

/**
 * Creates a no meeting room outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noMeetingRoomOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoMeetingRoomOutlinedIcon(element, ...properties);
    return element;
}
