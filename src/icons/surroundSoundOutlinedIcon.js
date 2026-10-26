import { initIcon } from "./icon.js";

//the url of the surround sound outlined svg; resolved relative to this module
const URL_SURROUNDSOUNDOUTLINED = new URL('../../assets/icons/surroundSoundOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a surround sound outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/surroundSoundOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSurroundSoundOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SURROUNDSOUNDOUTLINED }, ...properties);
}

/**
 * Creates a surround sound outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const surroundSoundOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSurroundSoundOutlinedIcon(element, ...properties);
    return element;
}
