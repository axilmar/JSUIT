import { initIcon } from "./icon.js";

//the url of the golf course svg; resolved relative to this module
const URL_GOLFCOURSE = new URL('../../assets/icons/golfCourse.svg', import.meta.url).href;

/**
 * Initializes an icon element as a golf course icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/golfCourse.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGolfCourseIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'golfCourseIcon', url: URL_GOLFCOURSE }, ...properties);
}

/**
 * Creates a golf course icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const golfCourseIcon = (...properties) => {
    const element = document.createElement('div');
    initGolfCourseIcon(element, ...properties);
    return element;
}
