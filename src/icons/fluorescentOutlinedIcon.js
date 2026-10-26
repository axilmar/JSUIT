import { initIcon } from "./icon.js";

//the url of the fluorescent outlined svg; resolved relative to this module
const URL_FLUORESCENTOUTLINED = new URL('../../assets/icons/fluorescentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fluorescent outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fluorescentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFluorescentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLUORESCENTOUTLINED }, ...properties);
}

/**
 * Creates a fluorescent outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fluorescentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFluorescentOutlinedIcon(element, ...properties);
    return element;
}
