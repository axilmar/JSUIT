import { initIcon } from "./icon.js";

//the url of the hive outlined svg; resolved relative to this module
const URL_HIVEOUTLINED = new URL('../../assets/icons/hiveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hive outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hiveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHiveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hiveOutlinedIcon', url: URL_HIVEOUTLINED }, ...properties);
}

/**
 * Creates a hive outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hiveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHiveOutlinedIcon(element, ...properties);
    return element;
}
