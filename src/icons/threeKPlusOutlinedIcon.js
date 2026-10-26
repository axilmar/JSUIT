import { initIcon } from "./icon.js";

//the url of the three k plus outlined svg; resolved relative to this module
const URL_THREEKPLUSOUTLINED = new URL('../../assets/icons/threeKPlusOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a three k plus outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/threeKPlusOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThreeKPlusOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THREEKPLUSOUTLINED }, ...properties);
}

/**
 * Creates a three k plus outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const threeKPlusOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThreeKPlusOutlinedIcon(element, ...properties);
    return element;
}
