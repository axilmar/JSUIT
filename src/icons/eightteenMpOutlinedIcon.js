import { initIcon } from "./icon.js";

//the url of the eightteen mp outlined svg; resolved relative to this module
const URL_EIGHTTEENMPOUTLINED = new URL('../../assets/icons/eightteenMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eightteen mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eightteenMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEightteenMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eightteenMpOutlinedIcon', url: URL_EIGHTTEENMPOUTLINED }, ...properties);
}

/**
 * Creates an eightteen mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eightteenMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEightteenMpOutlinedIcon(element, ...properties);
    return element;
}
