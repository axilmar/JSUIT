import { initIcon } from "./icon.js";

//the url of the add home outlined svg; resolved relative to this module
const URL_ADDHOMEOUTLINED = new URL('../../assets/icons/addHomeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add home outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addHomeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddHomeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addHomeOutlinedIcon', url: URL_ADDHOMEOUTLINED }, ...properties);
}

/**
 * Creates an add home outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addHomeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddHomeOutlinedIcon(element, ...properties);
    return element;
}
