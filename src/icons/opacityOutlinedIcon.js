import { initIcon } from "./icon.js";

//the url of the opacity outlined svg; resolved relative to this module
const URL_OPACITYOUTLINED = new URL('../../assets/icons/opacityOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an opacity outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/opacityOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOpacityOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OPACITYOUTLINED }, ...properties);
}

/**
 * Creates an opacity outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const opacityOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOpacityOutlinedIcon(element, ...properties);
    return element;
}
