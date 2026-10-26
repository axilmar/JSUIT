import { initIcon } from "./icon.js";

//the url of the near me outlined svg; resolved relative to this module
const URL_NEARMEOUTLINED = new URL('../../assets/icons/nearMeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a near me outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nearMeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNearMeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NEARMEOUTLINED }, ...properties);
}

/**
 * Creates a near me outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nearMeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNearMeOutlinedIcon(element, ...properties);
    return element;
}
