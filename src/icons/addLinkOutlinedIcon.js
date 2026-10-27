import { initIcon } from "./icon.js";

//the url of the add link outlined svg; resolved relative to this module
const URL_ADDLINKOUTLINED = new URL('../../assets/icons/addLinkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add link outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addLinkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddLinkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addLinkOutlinedIcon', url: URL_ADDLINKOUTLINED }, ...properties);
}

/**
 * Creates an add link outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addLinkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddLinkOutlinedIcon(element, ...properties);
    return element;
}
