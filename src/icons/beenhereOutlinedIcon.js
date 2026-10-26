import { initIcon } from "./icon.js";

//the url of the beenhere outlined svg; resolved relative to this module
const URL_BEENHEREOUTLINED = new URL('../../assets/icons/beenhereOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a beenhere outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/beenhereOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBeenhereOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BEENHEREOUTLINED }, ...properties);
}

/**
 * Creates a beenhere outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const beenhereOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBeenhereOutlinedIcon(element, ...properties);
    return element;
}
