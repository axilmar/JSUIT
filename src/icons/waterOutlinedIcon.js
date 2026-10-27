import { initIcon } from "./icon.js";

//the url of the water outlined svg; resolved relative to this module
const URL_WATEROUTLINED = new URL('../../assets/icons/waterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a water outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/waterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWaterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'waterOutlinedIcon', url: URL_WATEROUTLINED }, ...properties);
}

/**
 * Creates a water outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const waterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWaterOutlinedIcon(element, ...properties);
    return element;
}
