import { initIcon } from "./icon.js";

//the url of the battery60 outlined svg; resolved relative to this module
const URL_BATTERY60OUTLINED = new URL('../../assets/icons/battery60Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery60 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery60Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery60OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'battery60OutlinedIcon', url: URL_BATTERY60OUTLINED }, ...properties);
}

/**
 * Creates a battery60 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery60OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery60OutlinedIcon(element, ...properties);
    return element;
}
