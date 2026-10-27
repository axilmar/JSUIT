import { initIcon } from "./icon.js";

//the url of the mood svg; resolved relative to this module
const URL_MOOD = new URL('../../assets/icons/mood.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mood icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mood.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoodIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'moodIcon', url: URL_MOOD }, ...properties);
}

/**
 * Creates a mood icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moodIcon = (...properties) => {
    const element = document.createElement('div');
    initMoodIcon(element, ...properties);
    return element;
}
