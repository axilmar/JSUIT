import { initIcon } from "./icon.js";

//the url of the announcement svg; resolved relative to this module
const URL_ANNOUNCEMENT = new URL('../../assets/icons/announcement.svg', import.meta.url).href;

/**
 * Initializes an icon element as an announcement icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/announcement.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAnnouncementIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'announcementIcon', url: URL_ANNOUNCEMENT }, ...properties);
}

/**
 * Creates an announcement icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const announcementIcon = (...properties) => {
    const element = document.createElement('div');
    initAnnouncementIcon(element, ...properties);
    return element;
}
