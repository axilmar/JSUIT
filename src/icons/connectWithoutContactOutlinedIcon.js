import { initIcon } from "./icon.js";

//the url of the connect without contact outlined svg; resolved relative to this module
const URL_CONNECTWITHOUTCONTACTOUTLINED = new URL('../../assets/icons/connectWithoutContactOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a connect without contact outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/connectWithoutContactOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initConnectWithoutContactOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONNECTWITHOUTCONTACTOUTLINED }, ...properties);
}

/**
 * Creates a connect without contact outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const connectWithoutContactOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initConnectWithoutContactOutlinedIcon(element, ...properties);
    return element;
}
