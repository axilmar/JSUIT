import { initIcon } from "./icon.js";

//the url of the attach money outlined svg; resolved relative to this module
const URL_ATTACHMONEYOUTLINED = new URL('../../assets/icons/attachMoneyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an attach money outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/attachMoneyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAttachMoneyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'attachMoneyOutlinedIcon', url: URL_ATTACHMONEYOUTLINED }, ...properties);
}

/**
 * Creates an attach money outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const attachMoneyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAttachMoneyOutlinedIcon(element, ...properties);
    return element;
}
