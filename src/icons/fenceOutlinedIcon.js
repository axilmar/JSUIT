import { initIcon } from "./icon.js";

//the url of the fence outlined svg; resolved relative to this module
const URL_FENCEOUTLINED = new URL('../../assets/icons/fenceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fence outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fenceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFenceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fenceOutlinedIcon', url: URL_FENCEOUTLINED }, ...properties);
}

/**
 * Creates a fence outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fenceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFenceOutlinedIcon(element, ...properties);
    return element;
}
