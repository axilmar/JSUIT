import { initIcon } from "./icon.js";

//the url of the format shapes outlined svg; resolved relative to this module
const URL_FORMATSHAPESOUTLINED = new URL('../../assets/icons/formatShapesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format shapes outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatShapesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatShapesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatShapesOutlinedIcon', url: URL_FORMATSHAPESOUTLINED }, ...properties);
}

/**
 * Creates a format shapes outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatShapesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatShapesOutlinedIcon(element, ...properties);
    return element;
}
