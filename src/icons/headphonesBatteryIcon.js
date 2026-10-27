import { initIcon } from "./icon.js";

//the url of the headphones battery svg; resolved relative to this module
const URL_HEADPHONESBATTERY = new URL('../../assets/icons/headphonesBattery.svg', import.meta.url).href;

/**
 * Initializes an icon element as a headphones battery icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/headphonesBattery.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeadphonesBatteryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'headphonesBatteryIcon', url: URL_HEADPHONESBATTERY }, ...properties);
}

/**
 * Creates a headphones battery icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const headphonesBatteryIcon = (...properties) => {
    const element = document.createElement('div');
    initHeadphonesBatteryIcon(element, ...properties);
    return element;
}
