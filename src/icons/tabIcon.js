import { initIcon } from "./icon.js";

//the url of the tab svg; resolved relative to this module
const URL_TAB = new URL('../../assets/icons/tab.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tab icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tab.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTabIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tabIcon', url: URL_TAB }, ...properties);
}

/**
 * Creates a tab icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tabIcon = (...properties) => {
    const element = document.createElement('div');
    initTabIcon(element, ...properties);
    return element;
}
