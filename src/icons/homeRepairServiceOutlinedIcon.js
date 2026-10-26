import { initIcon } from "./icon.js";

//the url of the home repair service outlined svg; resolved relative to this module
const URL_HOMEREPAIRSERVICEOUTLINED = new URL('../../assets/icons/homeRepairServiceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a home repair service outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/homeRepairServiceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHomeRepairServiceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOMEREPAIRSERVICEOUTLINED }, ...properties);
}

/**
 * Creates a home repair service outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const homeRepairServiceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHomeRepairServiceOutlinedIcon(element, ...properties);
    return element;
}
