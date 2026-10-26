import { initIcon } from "./icon.js";

//the url of the macro off outlined svg; resolved relative to this module
const URL_MACROOFFOUTLINED = new URL('../../assets/icons/macroOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a macro off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/macroOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMacroOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MACROOFFOUTLINED }, ...properties);
}

/**
 * Creates a macro off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const macroOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMacroOffOutlinedIcon(element, ...properties);
    return element;
}
