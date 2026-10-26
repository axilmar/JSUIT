import { initIcon } from "./icon.js";

//the url of the connected tv outlined svg; resolved relative to this module
const URL_CONNECTEDTVOUTLINED = new URL('../../assets/icons/connectedTvOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a connected tv outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/connectedTvOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initConnectedTvOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONNECTEDTVOUTLINED }, ...properties);
}

/**
 * Creates a connected tv outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const connectedTvOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initConnectedTvOutlinedIcon(element, ...properties);
    return element;
}
