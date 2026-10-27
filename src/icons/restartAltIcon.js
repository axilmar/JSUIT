import { initIcon } from "./icon.js";

//the url of the restart alt svg; resolved relative to this module
const URL_RESTARTALT = new URL('../../assets/icons/restartAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a restart alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/restartAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRestartAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'restartAltIcon', url: URL_RESTARTALT }, ...properties);
}

/**
 * Creates a restart alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const restartAltIcon = (...properties) => {
    const element = document.createElement('div');
    initRestartAltIcon(element, ...properties);
    return element;
}
