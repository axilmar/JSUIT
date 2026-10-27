import { initIcon } from "./icon.js";

//the url of the blender outlined svg; resolved relative to this module
const URL_BLENDEROUTLINED = new URL('../../assets/icons/blenderOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blender outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blenderOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlenderOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'blenderOutlinedIcon', url: URL_BLENDEROUTLINED }, ...properties);
}

/**
 * Creates a blender outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blenderOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBlenderOutlinedIcon(element, ...properties);
    return element;
}
