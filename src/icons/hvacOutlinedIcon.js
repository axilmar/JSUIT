import { initIcon } from "./icon.js";

//the url of the hvac outlined svg; resolved relative to this module
const URL_HVACOUTLINED = new URL('../../assets/icons/hvacOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hvac outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hvacOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHvacOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hvacOutlinedIcon', url: URL_HVACOUTLINED }, ...properties);
}

/**
 * Creates a hvac outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hvacOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHvacOutlinedIcon(element, ...properties);
    return element;
}
