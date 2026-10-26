import { initIcon } from "./icon.js";

//the url of the auto graph outlined svg; resolved relative to this module
const URL_AUTOGRAPHOUTLINED = new URL('../../assets/icons/autoGraphOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto graph outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoGraphOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoGraphOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AUTOGRAPHOUTLINED }, ...properties);
}

/**
 * Creates an auto graph outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoGraphOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoGraphOutlinedIcon(element, ...properties);
    return element;
}
