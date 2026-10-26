import { initIcon } from "./icon.js";

//the url of the seven mp outlined svg; resolved relative to this module
const URL_SEVENMPOUTLINED = new URL('../../assets/icons/sevenMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a seven mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sevenMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSevenMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SEVENMPOUTLINED }, ...properties);
}

/**
 * Creates a seven mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sevenMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSevenMpOutlinedIcon(element, ...properties);
    return element;
}
