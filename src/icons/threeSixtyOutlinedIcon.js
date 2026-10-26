import { initIcon } from "./icon.js";

//the url of the three sixty outlined svg; resolved relative to this module
const URL_THREESIXTYOUTLINED = new URL('../../assets/icons/threeSixtyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a three sixty outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/threeSixtyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThreeSixtyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THREESIXTYOUTLINED }, ...properties);
}

/**
 * Creates a three sixty outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const threeSixtyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThreeSixtyOutlinedIcon(element, ...properties);
    return element;
}
