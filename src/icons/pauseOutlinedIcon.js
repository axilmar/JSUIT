import { initIcon } from "./icon.js";

//the url of the pause outlined svg; resolved relative to this module
const URL_PAUSEOUTLINED = new URL('../../assets/icons/pauseOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pause outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pauseOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPauseOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PAUSEOUTLINED }, ...properties);
}

/**
 * Creates a pause outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pauseOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPauseOutlinedIcon(element, ...properties);
    return element;
}
