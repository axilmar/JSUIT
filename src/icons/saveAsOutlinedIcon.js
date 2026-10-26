import { initIcon } from "./icon.js";

//the url of the save as outlined svg; resolved relative to this module
const URL_SAVEASOUTLINED = new URL('../../assets/icons/saveAsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a save as outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/saveAsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSaveAsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SAVEASOUTLINED }, ...properties);
}

/**
 * Creates a save as outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const saveAsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSaveAsOutlinedIcon(element, ...properties);
    return element;
}
