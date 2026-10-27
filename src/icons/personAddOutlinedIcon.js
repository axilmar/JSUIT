import { initIcon } from "./icon.js";

//the url of the person add outlined svg; resolved relative to this module
const URL_PERSONADDOUTLINED = new URL('../../assets/icons/personAddOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person add outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personAddOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonAddOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'personAddOutlinedIcon', url: URL_PERSONADDOUTLINED }, ...properties);
}

/**
 * Creates a person add outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personAddOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonAddOutlinedIcon(element, ...properties);
    return element;
}
