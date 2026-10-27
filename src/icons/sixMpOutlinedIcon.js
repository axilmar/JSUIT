import { initIcon } from "./icon.js";

//the url of the six mp outlined svg; resolved relative to this module
const URL_SIXMPOUTLINED = new URL('../../assets/icons/sixMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a six mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sixMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSixMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sixMpOutlinedIcon', url: URL_SIXMPOUTLINED }, ...properties);
}

/**
 * Creates a six mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sixMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSixMpOutlinedIcon(element, ...properties);
    return element;
}
