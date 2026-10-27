import { initIcon } from "./icon.js";

//the url of the battery30 svg; resolved relative to this module
const URL_BATTERY30 = new URL('../../assets/icons/battery30.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery30 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery30.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery30Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'battery30Icon', url: URL_BATTERY30 }, ...properties);
}

/**
 * Creates a battery30 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery30Icon = (...properties) => {
    const element = document.createElement('div');
    initBattery30Icon(element, ...properties);
    return element;
}
