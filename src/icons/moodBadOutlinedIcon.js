import { initIcon } from "./icon.js";

//the url of the mood bad outlined svg; resolved relative to this module
const URL_MOODBADOUTLINED = new URL('../../assets/icons/moodBadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mood bad outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moodBadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoodBadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'moodBadOutlinedIcon', url: URL_MOODBADOUTLINED }, ...properties);
}

/**
 * Creates a mood bad outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moodBadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMoodBadOutlinedIcon(element, ...properties);
    return element;
}
