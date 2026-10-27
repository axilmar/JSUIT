import { initIcon } from "./icon.js";

//the url of the play lesson outlined svg; resolved relative to this module
const URL_PLAYLESSONOUTLINED = new URL('../../assets/icons/playLessonOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play lesson outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playLessonOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayLessonOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'playLessonOutlinedIcon', url: URL_PLAYLESSONOUTLINED }, ...properties);
}

/**
 * Creates a play lesson outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playLessonOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayLessonOutlinedIcon(element, ...properties);
    return element;
}
