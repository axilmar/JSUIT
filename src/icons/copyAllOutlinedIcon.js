import { initIcon } from "./icon.js";

//the url of the copy all outlined svg; resolved relative to this module
const URL_COPYALLOUTLINED = new URL('../../assets/icons/copyAllOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a copy all outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/copyAllOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCopyAllOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'copyAllOutlinedIcon', url: URL_COPYALLOUTLINED }, ...properties);
}

/**
 * Creates a copy all outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const copyAllOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCopyAllOutlinedIcon(element, ...properties);
    return element;
}
