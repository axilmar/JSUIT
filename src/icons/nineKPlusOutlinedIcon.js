import { initIcon } from "./icon.js";

//the url of the nine k plus outlined svg; resolved relative to this module
const URL_NINEKPLUSOUTLINED = new URL('../../assets/icons/nineKPlusOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nine k plus outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nineKPlusOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNineKPlusOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NINEKPLUSOUTLINED }, ...properties);
}

/**
 * Creates a nine k plus outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nineKPlusOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNineKPlusOutlinedIcon(element, ...properties);
    return element;
}
