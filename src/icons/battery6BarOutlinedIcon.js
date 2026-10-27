import { initIcon } from "./icon.js";

//the url of the battery6 bar outlined svg; resolved relative to this module
const URL_BATTERY6BAROUTLINED = new URL('../../assets/icons/battery6BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery6 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery6BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery6BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'battery6BarOutlinedIcon', url: URL_BATTERY6BAROUTLINED }, ...properties);
}

/**
 * Creates a battery6 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery6BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery6BarOutlinedIcon(element, ...properties);
    return element;
}
