import { initIcon } from "./icon.js";

//the url of the format align left outlined svg; resolved relative to this module
const URL_FORMATALIGNLEFTOUTLINED = new URL('../../assets/icons/formatAlignLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format align left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatAlignLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatAlignLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatAlignLeftOutlinedIcon', url: URL_FORMATALIGNLEFTOUTLINED }, ...properties);
}

/**
 * Creates a format align left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatAlignLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatAlignLeftOutlinedIcon(element, ...properties);
    return element;
}
