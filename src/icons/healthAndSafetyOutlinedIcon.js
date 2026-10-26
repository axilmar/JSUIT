import { initIcon } from "./icon.js";

//the url of the health and safety outlined svg; resolved relative to this module
const URL_HEALTHANDSAFETYOUTLINED = new URL('../../assets/icons/healthAndSafetyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a health and safety outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/healthAndSafetyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHealthAndSafetyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HEALTHANDSAFETYOUTLINED }, ...properties);
}

/**
 * Creates a health and safety outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const healthAndSafetyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHealthAndSafetyOutlinedIcon(element, ...properties);
    return element;
}
