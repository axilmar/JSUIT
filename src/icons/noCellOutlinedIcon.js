import { initIcon } from "./icon.js";

//the url of the no cell outlined svg; resolved relative to this module
const URL_NOCELLOUTLINED = new URL('../../assets/icons/noCellOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no cell outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noCellOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoCellOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noCellOutlinedIcon', url: URL_NOCELLOUTLINED }, ...properties);
}

/**
 * Creates a no cell outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noCellOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoCellOutlinedIcon(element, ...properties);
    return element;
}
