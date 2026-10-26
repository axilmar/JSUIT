import { initIcon } from "./icon.js";

//the url of the tab unselected outlined svg; resolved relative to this module
const URL_TABUNSELECTEDOUTLINED = new URL('../../assets/icons/tabUnselectedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tab unselected outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tabUnselectedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTabUnselectedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TABUNSELECTEDOUTLINED }, ...properties);
}

/**
 * Creates a tab unselected outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tabUnselectedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTabUnselectedOutlinedIcon(element, ...properties);
    return element;
}
