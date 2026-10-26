import { initIcon } from "./icon.js";

//the url of the save alt outlined svg; resolved relative to this module
const URL_SAVEALTOUTLINED = new URL('../../assets/icons/saveAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a save alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/saveAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSaveAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SAVEALTOUTLINED }, ...properties);
}

/**
 * Creates a save alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const saveAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSaveAltOutlinedIcon(element, ...properties);
    return element;
}
