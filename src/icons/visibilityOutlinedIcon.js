import { initIcon } from "./icon.js";

//the url of the visibility outlined svg; resolved relative to this module
const URL_VISIBILITYOUTLINED = new URL('../../assets/icons/visibilityOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a visibility outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/visibilityOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVisibilityOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'visibilityOutlinedIcon', url: URL_VISIBILITYOUTLINED }, ...properties);
}

/**
 * Creates a visibility outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const visibilityOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVisibilityOutlinedIcon(element, ...properties);
    return element;
}
