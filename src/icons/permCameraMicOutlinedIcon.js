import { initIcon } from "./icon.js";

//the url of the perm camera mic outlined svg; resolved relative to this module
const URL_PERMCAMERAMICOUTLINED = new URL('../../assets/icons/permCameraMicOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm camera mic outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permCameraMicOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermCameraMicOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'permCameraMicOutlinedIcon', url: URL_PERMCAMERAMICOUTLINED }, ...properties);
}

/**
 * Creates a perm camera mic outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permCameraMicOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPermCameraMicOutlinedIcon(element, ...properties);
    return element;
}
