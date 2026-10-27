import { initIcon } from "./icon.js";

//the url of the flare outlined svg; resolved relative to this module
const URL_FLAREOUTLINED = new URL('../../assets/icons/flareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flare outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flareOutlinedIcon', url: URL_FLAREOUTLINED }, ...properties);
}

/**
 * Creates a flare outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlareOutlinedIcon(element, ...properties);
    return element;
}
