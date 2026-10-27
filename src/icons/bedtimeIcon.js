import { initIcon } from "./icon.js";

//the url of the bedtime svg; resolved relative to this module
const URL_BEDTIME = new URL('../../assets/icons/bedtime.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bedtime icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bedtime.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBedtimeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bedtimeIcon', url: URL_BEDTIME }, ...properties);
}

/**
 * Creates a bedtime icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bedtimeIcon = (...properties) => {
    const element = document.createElement('div');
    initBedtimeIcon(element, ...properties);
    return element;
}
