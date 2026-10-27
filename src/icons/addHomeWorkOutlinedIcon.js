import { initIcon } from "./icon.js";

//the url of the add home work outlined svg; resolved relative to this module
const URL_ADDHOMEWORKOUTLINED = new URL('../../assets/icons/addHomeWorkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add home work outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addHomeWorkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddHomeWorkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addHomeWorkOutlinedIcon', url: URL_ADDHOMEWORKOUTLINED }, ...properties);
}

/**
 * Creates an add home work outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addHomeWorkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddHomeWorkOutlinedIcon(element, ...properties);
    return element;
}
