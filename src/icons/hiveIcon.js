import { initIcon } from "./icon.js";

//the url of the hive svg; resolved relative to this module
const URL_HIVE = new URL('../../assets/icons/hive.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hive icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hive.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHiveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hiveIcon', url: URL_HIVE }, ...properties);
}

/**
 * Creates a hive icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hiveIcon = (...properties) => {
    const element = document.createElement('div');
    initHiveIcon(element, ...properties);
    return element;
}
