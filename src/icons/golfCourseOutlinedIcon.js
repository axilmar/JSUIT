import { initIcon } from "./icon.js";

//the url of the golf course outlined svg; resolved relative to this module
const URL_GOLFCOURSEOUTLINED = new URL('../../assets/icons/golfCourseOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a golf course outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/golfCourseOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGolfCourseOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'golfCourseOutlinedIcon', url: URL_GOLFCOURSEOUTLINED }, ...properties);
}

/**
 * Creates a golf course outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const golfCourseOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGolfCourseOutlinedIcon(element, ...properties);
    return element;
}
