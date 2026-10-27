import { initIcon } from "./icon.js";

//the url of the border outer outlined svg; resolved relative to this module
const URL_BORDEROUTEROUTLINED = new URL('../../assets/icons/borderOuterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border outer outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderOuterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderOuterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'borderOuterOutlinedIcon', url: URL_BORDEROUTEROUTLINED }, ...properties);
}

/**
 * Creates a border outer outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderOuterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderOuterOutlinedIcon(element, ...properties);
    return element;
}
