import { initIcon } from "./icon.js";

//the url of the mood outlined svg; resolved relative to this module
const URL_MOODOUTLINED = new URL('../../assets/icons/moodOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mood outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moodOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoodOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOODOUTLINED }, ...properties);
}

/**
 * Creates a mood outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moodOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMoodOutlinedIcon(element, ...properties);
    return element;
}
