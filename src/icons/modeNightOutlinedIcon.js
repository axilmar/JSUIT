import { initIcon } from "./icon.js";

//the url of the mode night outlined svg; resolved relative to this module
const URL_MODENIGHTOUTLINED = new URL('../../assets/icons/modeNightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode night outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modeNightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeNightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'modeNightOutlinedIcon', url: URL_MODENIGHTOUTLINED }, ...properties);
}

/**
 * Creates a mode night outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeNightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initModeNightOutlinedIcon(element, ...properties);
    return element;
}
