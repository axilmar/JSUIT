import { initIcon } from "./icon.js";

//the url of the format size outlined svg; resolved relative to this module
const URL_FORMATSIZEOUTLINED = new URL('../../assets/icons/formatSizeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format size outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatSizeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatSizeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatSizeOutlinedIcon', url: URL_FORMATSIZEOUTLINED }, ...properties);
}

/**
 * Creates a format size outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatSizeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatSizeOutlinedIcon(element, ...properties);
    return element;
}
