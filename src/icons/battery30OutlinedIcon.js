import { initIcon } from "./icon.js";

//the url of the battery30 outlined svg; resolved relative to this module
const URL_BATTERY30OUTLINED = new URL('../../assets/icons/battery30Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery30 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery30Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery30OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'battery30OutlinedIcon', url: URL_BATTERY30OUTLINED }, ...properties);
}

/**
 * Creates a battery30 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery30OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery30OutlinedIcon(element, ...properties);
    return element;
}
