import { initIcon } from "./icon.js";

//the url of the fifteen mp outlined svg; resolved relative to this module
const URL_FIFTEENMPOUTLINED = new URL('../../assets/icons/fifteenMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fifteen mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fifteenMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFifteenMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIFTEENMPOUTLINED }, ...properties);
}

/**
 * Creates a fifteen mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fifteenMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFifteenMpOutlinedIcon(element, ...properties);
    return element;
}
