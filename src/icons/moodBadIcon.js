import { initIcon } from "./icon.js";

//the url of the mood bad svg; resolved relative to this module
const URL_MOODBAD = new URL('../../assets/icons/moodBad.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mood bad icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moodBad.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoodBadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOODBAD }, ...properties);
}

/**
 * Creates a mood bad icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moodBadIcon = (...properties) => {
    const element = document.createElement('div');
    initMoodBadIcon(element, ...properties);
    return element;
}
