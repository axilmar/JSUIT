import { initIcon } from "./icon.js";

//the url of the battery20 svg; resolved relative to this module
const URL_BATTERY20 = new URL('../../assets/icons/battery20.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery20 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery20.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery20Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERY20 }, ...properties);
}

/**
 * Creates a battery20 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery20Icon = (...properties) => {
    const element = document.createElement('div');
    initBattery20Icon(element, ...properties);
    return element;
}
