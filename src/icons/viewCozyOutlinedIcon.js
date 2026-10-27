import { initIcon } from "./icon.js";

//the url of the view cozy outlined svg; resolved relative to this module
const URL_VIEWCOZYOUTLINED = new URL('../../assets/icons/viewCozyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view cozy outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewCozyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewCozyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewCozyOutlinedIcon', url: URL_VIEWCOZYOUTLINED }, ...properties);
}

/**
 * Creates a view cozy outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewCozyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewCozyOutlinedIcon(element, ...properties);
    return element;
}
