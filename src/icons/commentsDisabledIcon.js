import { initIcon } from "./icon.js";

//the url of the comments disabled svg; resolved relative to this module
const URL_COMMENTSDISABLED = new URL('../../assets/icons/commentsDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a comments disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/commentsDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCommentsDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COMMENTSDISABLED }, ...properties);
}

/**
 * Creates a comments disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const commentsDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initCommentsDisabledIcon(element, ...properties);
    return element;
}
