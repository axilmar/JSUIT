import { initIcon } from "./icon.js";

//the url of the fullscreen exit outlined svg; resolved relative to this module
const URL_FULLSCREENEXITOUTLINED = new URL('../../assets/icons/fullscreenExitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fullscreen exit outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fullscreenExitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFullscreenExitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FULLSCREENEXITOUTLINED }, ...properties);
}

/**
 * Creates a fullscreen exit outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fullscreenExitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFullscreenExitOutlinedIcon(element, ...properties);
    return element;
}
