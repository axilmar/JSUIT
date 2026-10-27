import { initIcon } from "./icon.js";

//the url of the post add outlined svg; resolved relative to this module
const URL_POSTADDOUTLINED = new URL('../../assets/icons/postAddOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a post add outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/postAddOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPostAddOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'postAddOutlinedIcon', url: URL_POSTADDOUTLINED }, ...properties);
}

/**
 * Creates a post add outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const postAddOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPostAddOutlinedIcon(element, ...properties);
    return element;
}
