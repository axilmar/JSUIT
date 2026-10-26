import { initIcon } from "./icon.js";

//the url of the cast for education svg; resolved relative to this module
const URL_CASTFOREDUCATION = new URL('../../assets/icons/castForEducation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cast for education icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/castForEducation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCastForEducationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CASTFOREDUCATION }, ...properties);
}

/**
 * Creates a cast for education icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const castForEducationIcon = (...properties) => {
    const element = document.createElement('div');
    initCastForEducationIcon(element, ...properties);
    return element;
}
