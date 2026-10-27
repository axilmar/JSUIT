import { initIcon } from "./icon.js";

//the url of the border horizontal outlined svg; resolved relative to this module
const URL_BORDERHORIZONTALOUTLINED = new URL('../../assets/icons/borderHorizontalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border horizontal outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderHorizontalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderHorizontalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'borderHorizontalOutlinedIcon', url: URL_BORDERHORIZONTALOUTLINED }, ...properties);
}

/**
 * Creates a border horizontal outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderHorizontalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderHorizontalOutlinedIcon(element, ...properties);
    return element;
}
