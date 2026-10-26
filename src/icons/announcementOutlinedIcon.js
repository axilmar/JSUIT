import { initIcon } from "./icon.js";

//the url of the announcement outlined svg; resolved relative to this module
const URL_ANNOUNCEMENTOUTLINED = new URL('../../assets/icons/announcementOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an announcement outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/announcementOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAnnouncementOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ANNOUNCEMENTOUTLINED }, ...properties);
}

/**
 * Creates an announcement outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const announcementOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAnnouncementOutlinedIcon(element, ...properties);
    return element;
}
