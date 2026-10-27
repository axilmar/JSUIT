import { initIcon } from "./icon.js";

//the url of the view module svg; resolved relative to this module
const URL_VIEWMODULE = new URL('../../assets/icons/viewModule.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view module icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewModule.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewModuleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewModuleIcon', url: URL_VIEWMODULE }, ...properties);
}

/**
 * Creates a view module icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewModuleIcon = (...properties) => {
    const element = document.createElement('div');
    initViewModuleIcon(element, ...properties);
    return element;
}
