import { initIcon } from "./icon.js";

//the url of the mode edit outline outlined svg; resolved relative to this module
const URL_MODEEDITOUTLINEOUTLINED = new URL('../../assets/icons/modeEditOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode edit outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modeEditOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeEditOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'modeEditOutlineOutlinedIcon', url: URL_MODEEDITOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a mode edit outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeEditOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initModeEditOutlineOutlinedIcon(element, ...properties);
    return element;
}
