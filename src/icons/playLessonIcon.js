import { initIcon } from "./icon.js";

//the url of the play lesson svg; resolved relative to this module
const URL_PLAYLESSON = new URL('../../assets/icons/playLesson.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play lesson icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playLesson.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayLessonIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYLESSON }, ...properties);
}

/**
 * Creates a play lesson icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playLessonIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayLessonIcon(element, ...properties);
    return element;
}
