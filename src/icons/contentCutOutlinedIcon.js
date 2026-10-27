import { initIcon } from "./icon.js";

//the url of the content cut outlined svg; resolved relative to this module
const URL_CONTENTCUTOUTLINED = new URL('../../assets/icons/contentCutOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a content cut outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contentCutOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContentCutOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contentCutOutlinedIcon', url: URL_CONTENTCUTOUTLINED }, ...properties);
}

/**
 * Creates a content cut outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contentCutOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initContentCutOutlinedIcon(element, ...properties);
    return element;
}
