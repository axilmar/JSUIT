import { initIcon } from "./icon.js";

//the url of the publish outlined svg; resolved relative to this module
const URL_PUBLISHOUTLINED = new URL('../../assets/icons/publishOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a publish outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/publishOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPublishOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PUBLISHOUTLINED }, ...properties);
}

/**
 * Creates a publish outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const publishOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPublishOutlinedIcon(element, ...properties);
    return element;
}
