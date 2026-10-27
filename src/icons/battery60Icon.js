import { initIcon } from "./icon.js";

//the url of the battery60 svg; resolved relative to this module
const URL_BATTERY60 = new URL('../../assets/icons/battery60.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery60 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery60.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery60Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'battery60Icon', url: URL_BATTERY60 }, ...properties);
}

/**
 * Creates a battery60 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery60Icon = (...properties) => {
    const element = document.createElement('div');
    initBattery60Icon(element, ...properties);
    return element;
}
