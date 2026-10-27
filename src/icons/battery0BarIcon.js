import { initIcon } from "./icon.js";

//the url of the battery0 bar svg; resolved relative to this module
const URL_BATTERY0BAR = new URL('../../assets/icons/battery0Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery0 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery0Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery0BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'battery0BarIcon', url: URL_BATTERY0BAR }, ...properties);
}

/**
 * Creates a battery0 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery0BarIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery0BarIcon(element, ...properties);
    return element;
}
