import { initIcon } from "./icon.js";

//the url of the battery2 bar outlined svg; resolved relative to this module
const URL_BATTERY2BAROUTLINED = new URL('../../assets/icons/battery2BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery2 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery2BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery2BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'battery2BarOutlinedIcon', url: URL_BATTERY2BAROUTLINED }, ...properties);
}

/**
 * Creates a battery2 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery2BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery2BarOutlinedIcon(element, ...properties);
    return element;
}
