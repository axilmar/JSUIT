import { initIcon } from "./icon.js";

//the url of the battery80 svg; resolved relative to this module
const URL_BATTERY80 = new URL('../../assets/icons/battery80.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery80 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery80.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery80Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'battery80Icon', url: URL_BATTERY80 }, ...properties);
}

/**
 * Creates a battery80 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery80Icon = (...properties) => {
    const element = document.createElement('div');
    initBattery80Icon(element, ...properties);
    return element;
}
