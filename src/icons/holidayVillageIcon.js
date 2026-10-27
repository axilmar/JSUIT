import { initIcon } from "./icon.js";

//the url of the holiday village svg; resolved relative to this module
const URL_HOLIDAYVILLAGE = new URL('../../assets/icons/holidayVillage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a holiday village icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/holidayVillage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHolidayVillageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'holidayVillageIcon', url: URL_HOLIDAYVILLAGE }, ...properties);
}

/**
 * Creates a holiday village icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const holidayVillageIcon = (...properties) => {
    const element = document.createElement('div');
    initHolidayVillageIcon(element, ...properties);
    return element;
}
