import { initIcon } from "./icon.js";

//the url of the stay primary landscape outlined svg; resolved relative to this module
const URL_STAYPRIMARYLANDSCAPEOUTLINED = new URL('../../assets/icons/stayPrimaryLandscapeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stay primary landscape outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stayPrimaryLandscapeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStayPrimaryLandscapeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STAYPRIMARYLANDSCAPEOUTLINED }, ...properties);
}

/**
 * Creates a stay primary landscape outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stayPrimaryLandscapeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStayPrimaryLandscapeOutlinedIcon(element, ...properties);
    return element;
}
