import { initIcon } from "./icon.js";

//the url of the fivteen mp outlined svg; resolved relative to this module
const URL_FIVTEENMPOUTLINED = new URL('../../assets/icons/fivteenMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fivteen mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fivteenMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFivteenMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIVTEENMPOUTLINED }, ...properties);
}

/**
 * Creates a fivteen mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fivteenMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFivteenMpOutlinedIcon(element, ...properties);
    return element;
}
