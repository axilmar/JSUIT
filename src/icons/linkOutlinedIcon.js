import { initIcon } from "./icon.js";

//the url of the link outlined svg; resolved relative to this module
const URL_LINKOUTLINED = new URL('../../assets/icons/linkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a link outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/linkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLinkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'linkOutlinedIcon', url: URL_LINKOUTLINED }, ...properties);
}

/**
 * Creates a link outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const linkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLinkOutlinedIcon(element, ...properties);
    return element;
}
