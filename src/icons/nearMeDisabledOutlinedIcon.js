import { initIcon } from "./icon.js";

//the url of the near me disabled outlined svg; resolved relative to this module
const URL_NEARMEDISABLEDOUTLINED = new URL('../../assets/icons/nearMeDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a near me disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nearMeDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNearMeDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NEARMEDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a near me disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nearMeDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNearMeDisabledOutlinedIcon(element, ...properties);
    return element;
}
