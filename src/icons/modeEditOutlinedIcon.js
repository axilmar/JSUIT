import { initIcon } from "./icon.js";

//the url of the mode edit outlined svg; resolved relative to this module
const URL_MODEEDITOUTLINED = new URL('../../assets/icons/modeEditOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode edit outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modeEditOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeEditOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MODEEDITOUTLINED }, ...properties);
}

/**
 * Creates a mode edit outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeEditOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initModeEditOutlinedIcon(element, ...properties);
    return element;
}
