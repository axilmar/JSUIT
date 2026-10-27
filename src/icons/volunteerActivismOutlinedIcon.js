import { initIcon } from "./icon.js";

//the url of the volunteer activism outlined svg; resolved relative to this module
const URL_VOLUNTEERACTIVISMOUTLINED = new URL('../../assets/icons/volunteerActivismOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a volunteer activism outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/volunteerActivismOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVolunteerActivismOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'volunteerActivismOutlinedIcon', url: URL_VOLUNTEERACTIVISMOUTLINED }, ...properties);
}

/**
 * Creates a volunteer activism outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const volunteerActivismOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVolunteerActivismOutlinedIcon(element, ...properties);
    return element;
}
