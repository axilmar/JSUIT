import { initIcon } from "./icon.js";

//the url of the play arrow svg; resolved relative to this module
const URL_PLAYARROW = new URL('../../assets/icons/playArrow.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play arrow icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playArrow.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayArrowIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYARROW }, ...properties);
}

/**
 * Creates a play arrow icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playArrowIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayArrowIcon(element, ...properties);
    return element;
}
