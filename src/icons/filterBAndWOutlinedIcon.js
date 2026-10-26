import { initIcon } from "./icon.js";

//the url of the filter b and w outlined svg; resolved relative to this module
const URL_FILTERBANDWOUTLINED = new URL('../../assets/icons/filterBAndWOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter b and w outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterBAndWOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterBAndWOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTERBANDWOUTLINED }, ...properties);
}

/**
 * Creates a filter b and w outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterBAndWOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterBAndWOutlinedIcon(element, ...properties);
    return element;
}
