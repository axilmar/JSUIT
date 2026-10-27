import { initIcon } from "./icon.js";

//the url of the border all outlined svg; resolved relative to this module
const URL_BORDERALLOUTLINED = new URL('../../assets/icons/borderAllOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border all outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderAllOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderAllOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'borderAllOutlinedIcon', url: URL_BORDERALLOUTLINED }, ...properties);
}

/**
 * Creates a border all outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderAllOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderAllOutlinedIcon(element, ...properties);
    return element;
}
