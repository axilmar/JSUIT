import { initIcon } from "./icon.js";

//the url of the view quilt outlined svg; resolved relative to this module
const URL_VIEWQUILTOUTLINED = new URL('../../assets/icons/viewQuiltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view quilt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewQuiltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewQuiltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewQuiltOutlinedIcon', url: URL_VIEWQUILTOUTLINED }, ...properties);
}

/**
 * Creates a view quilt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewQuiltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewQuiltOutlinedIcon(element, ...properties);
    return element;
}
