import { initIcon } from "./icon.js";

//the url of the view module outlined svg; resolved relative to this module
const URL_VIEWMODULEOUTLINED = new URL('../../assets/icons/viewModuleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view module outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewModuleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewModuleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewModuleOutlinedIcon', url: URL_VIEWMODULEOUTLINED }, ...properties);
}

/**
 * Creates a view module outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewModuleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewModuleOutlinedIcon(element, ...properties);
    return element;
}
