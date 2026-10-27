import { initIcon } from "./icon.js";

//the url of the curtains outlined svg; resolved relative to this module
const URL_CURTAINSOUTLINED = new URL('../../assets/icons/curtainsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a curtains outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/curtainsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurtainsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'curtainsOutlinedIcon', url: URL_CURTAINSOUTLINED }, ...properties);
}

/**
 * Creates a curtains outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const curtainsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCurtainsOutlinedIcon(element, ...properties);
    return element;
}
