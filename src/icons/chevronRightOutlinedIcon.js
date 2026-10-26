import { initIcon } from "./icon.js";

//the url of the chevron right outlined svg; resolved relative to this module
const URL_CHEVRONRIGHTOUTLINED = new URL('../../assets/icons/chevronRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chevron right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chevronRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChevronRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHEVRONRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a chevron right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chevronRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChevronRightOutlinedIcon(element, ...properties);
    return element;
}
