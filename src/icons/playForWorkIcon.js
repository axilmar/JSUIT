import { initIcon } from "./icon.js";

//the url of the play for work svg; resolved relative to this module
const URL_PLAYFORWORK = new URL('../../assets/icons/playForWork.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play for work icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playForWork.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayForWorkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYFORWORK }, ...properties);
}

/**
 * Creates a play for work icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playForWorkIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayForWorkIcon(element, ...properties);
    return element;
}
