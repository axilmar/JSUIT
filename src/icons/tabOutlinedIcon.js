import { initIcon } from "./icon.js";

//the url of the tab outlined svg; resolved relative to this module
const URL_TABOUTLINED = new URL('../../assets/icons/tabOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tab outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tabOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTabOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tabOutlinedIcon', url: URL_TABOUTLINED }, ...properties);
}

/**
 * Creates a tab outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tabOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTabOutlinedIcon(element, ...properties);
    return element;
}
