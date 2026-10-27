import { initIcon } from "./icon.js";

//the url of the battery0 bar outlined svg; resolved relative to this module
const URL_BATTERY0BAROUTLINED = new URL('../../assets/icons/battery0BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery0 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery0BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery0BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'battery0BarOutlinedIcon', url: URL_BATTERY0BAROUTLINED }, ...properties);
}

/**
 * Creates a battery0 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery0BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery0BarOutlinedIcon(element, ...properties);
    return element;
}
