import { initIcon } from "./icon.js";

//the url of the format align justify outlined svg; resolved relative to this module
const URL_FORMATALIGNJUSTIFYOUTLINED = new URL('../../assets/icons/formatAlignJustifyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format align justify outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatAlignJustifyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatAlignJustifyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatAlignJustifyOutlinedIcon', url: URL_FORMATALIGNJUSTIFYOUTLINED }, ...properties);
}

/**
 * Creates a format align justify outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatAlignJustifyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatAlignJustifyOutlinedIcon(element, ...properties);
    return element;
}
