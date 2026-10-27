import { initIcon } from "./icon.js";

//the url of the comments disabled outlined svg; resolved relative to this module
const URL_COMMENTSDISABLEDOUTLINED = new URL('../../assets/icons/commentsDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a comments disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/commentsDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCommentsDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'commentsDisabledOutlinedIcon', url: URL_COMMENTSDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a comments disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const commentsDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCommentsDisabledOutlinedIcon(element, ...properties);
    return element;
}
