import { initIcon } from "./icon.js";

//the url of the anchor outlined svg; resolved relative to this module
const URL_ANCHOROUTLINED = new URL('../../assets/icons/anchorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an anchor outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/anchorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAnchorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'anchorOutlinedIcon', url: URL_ANCHOROUTLINED }, ...properties);
}

/**
 * Creates an anchor outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const anchorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAnchorOutlinedIcon(element, ...properties);
    return element;
}
