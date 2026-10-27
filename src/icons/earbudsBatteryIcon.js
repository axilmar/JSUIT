import { initIcon } from "./icon.js";

//the url of the earbuds battery svg; resolved relative to this module
const URL_EARBUDSBATTERY = new URL('../../assets/icons/earbudsBattery.svg', import.meta.url).href;

/**
 * Initializes an icon element as an earbuds battery icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/earbudsBattery.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEarbudsBatteryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'earbudsBatteryIcon', url: URL_EARBUDSBATTERY }, ...properties);
}

/**
 * Creates an earbuds battery icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const earbudsBatteryIcon = (...properties) => {
    const element = document.createElement('div');
    initEarbudsBatteryIcon(element, ...properties);
    return element;
}
