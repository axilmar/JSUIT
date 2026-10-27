import { initIcon } from "./icon.js";

//the url of the school outlined svg; resolved relative to this module
const URL_SCHOOLOUTLINED = new URL('../../assets/icons/schoolOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a school outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/schoolOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSchoolOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'schoolOutlinedIcon', url: URL_SCHOOLOUTLINED }, ...properties);
}

/**
 * Creates a school outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const schoolOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSchoolOutlinedIcon(element, ...properties);
    return element;
}
