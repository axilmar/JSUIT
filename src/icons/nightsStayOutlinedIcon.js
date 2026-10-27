import { initIcon } from "./icon.js";

//the url of the nights stay outlined svg; resolved relative to this module
const URL_NIGHTSSTAYOUTLINED = new URL('../../assets/icons/nightsStayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nights stay outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nightsStayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNightsStayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nightsStayOutlinedIcon', url: URL_NIGHTSSTAYOUTLINED }, ...properties);
}

/**
 * Creates a nights stay outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nightsStayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNightsStayOutlinedIcon(element, ...properties);
    return element;
}
