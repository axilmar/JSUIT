import { initIcon } from "./icon.js";

//the url of the macro off svg; resolved relative to this module
const URL_MACROOFF = new URL('../../assets/icons/macroOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a macro off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/macroOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMacroOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'macroOffIcon', url: URL_MACROOFF }, ...properties);
}

/**
 * Creates a macro off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const macroOffIcon = (...properties) => {
    const element = document.createElement('div');
    initMacroOffIcon(element, ...properties);
    return element;
}
