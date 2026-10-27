import { initIcon } from "./icon.js";

//the url of the battery80 outlined svg; resolved relative to this module
const URL_BATTERY80OUTLINED = new URL('../../assets/icons/battery80Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery80 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery80Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery80OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'battery80OutlinedIcon', url: URL_BATTERY80OUTLINED }, ...properties);
}

/**
 * Creates a battery80 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery80OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery80OutlinedIcon(element, ...properties);
    return element;
}
