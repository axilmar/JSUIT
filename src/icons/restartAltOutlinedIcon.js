import { initIcon } from "./icon.js";

//the url of the restart alt outlined svg; resolved relative to this module
const URL_RESTARTALTOUTLINED = new URL('../../assets/icons/restartAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a restart alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/restartAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRestartAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RESTARTALTOUTLINED }, ...properties);
}

/**
 * Creates a restart alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const restartAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRestartAltOutlinedIcon(element, ...properties);
    return element;
}
