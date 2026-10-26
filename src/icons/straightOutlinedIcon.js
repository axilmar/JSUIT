import { initIcon } from "./icon.js";

//the url of the straight outlined svg; resolved relative to this module
const URL_STRAIGHTOUTLINED = new URL('../../assets/icons/straightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a straight outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/straightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStraightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STRAIGHTOUTLINED }, ...properties);
}

/**
 * Creates a straight outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const straightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStraightOutlinedIcon(element, ...properties);
    return element;
}
