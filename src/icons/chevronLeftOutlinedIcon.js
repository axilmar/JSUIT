import { initIcon } from "./icon.js";

//the url of the chevron left outlined svg; resolved relative to this module
const URL_CHEVRONLEFTOUTLINED = new URL('../../assets/icons/chevronLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chevron left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chevronLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChevronLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'chevronLeftOutlinedIcon', url: URL_CHEVRONLEFTOUTLINED }, ...properties);
}

/**
 * Creates a chevron left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chevronLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChevronLeftOutlinedIcon(element, ...properties);
    return element;
}
