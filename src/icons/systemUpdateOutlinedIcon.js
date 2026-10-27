import { initIcon } from "./icon.js";

//the url of the system update outlined svg; resolved relative to this module
const URL_SYSTEMUPDATEOUTLINED = new URL('../../assets/icons/systemUpdateOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a system update outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/systemUpdateOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSystemUpdateOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'systemUpdateOutlinedIcon', url: URL_SYSTEMUPDATEOUTLINED }, ...properties);
}

/**
 * Creates a system update outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const systemUpdateOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSystemUpdateOutlinedIcon(element, ...properties);
    return element;
}
