import { initIcon } from "./icon.js";

//the url of the insert emoticon outlined svg; resolved relative to this module
const URL_INSERTEMOTICONOUTLINED = new URL('../../assets/icons/insertEmoticonOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert emoticon outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertEmoticonOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertEmoticonOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'insertEmoticonOutlinedIcon', url: URL_INSERTEMOTICONOUTLINED }, ...properties);
}

/**
 * Creates an insert emoticon outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertEmoticonOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertEmoticonOutlinedIcon(element, ...properties);
    return element;
}
