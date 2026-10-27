import { initIcon } from "./icon.js";

//the url of the nature people outlined svg; resolved relative to this module
const URL_NATUREPEOPLEOUTLINED = new URL('../../assets/icons/naturePeopleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nature people outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/naturePeopleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNaturePeopleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'naturePeopleOutlinedIcon', url: URL_NATUREPEOPLEOUTLINED }, ...properties);
}

/**
 * Creates a nature people outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const naturePeopleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNaturePeopleOutlinedIcon(element, ...properties);
    return element;
}
