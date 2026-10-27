import { initIcon } from "./icon.js";

//the url of the space dashboard outlined svg; resolved relative to this module
const URL_SPACEDASHBOARDOUTLINED = new URL('../../assets/icons/spaceDashboardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a space dashboard outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spaceDashboardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpaceDashboardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'spaceDashboardOutlinedIcon', url: URL_SPACEDASHBOARDOUTLINED }, ...properties);
}

/**
 * Creates a space dashboard outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spaceDashboardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpaceDashboardOutlinedIcon(element, ...properties);
    return element;
}
