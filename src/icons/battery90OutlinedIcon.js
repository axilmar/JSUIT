import { initIcon } from "./icon.js";

//the url of the battery90 outlined svg; resolved relative to this module
const URL_BATTERY90OUTLINED = new URL('../../assets/icons/battery90Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery90 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery90Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery90OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERY90OUTLINED }, ...properties);
}

/**
 * Creates a battery90 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery90OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery90OutlinedIcon(element, ...properties);
    return element;
}
