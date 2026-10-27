import { initIcon } from "./icon.js";

//the url of the system update alt outlined svg; resolved relative to this module
const URL_SYSTEMUPDATEALTOUTLINED = new URL('../../assets/icons/systemUpdateAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a system update alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/systemUpdateAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSystemUpdateAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'systemUpdateAltOutlinedIcon', url: URL_SYSTEMUPDATEALTOUTLINED }, ...properties);
}

/**
 * Creates a system update alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const systemUpdateAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSystemUpdateAltOutlinedIcon(element, ...properties);
    return element;
}
