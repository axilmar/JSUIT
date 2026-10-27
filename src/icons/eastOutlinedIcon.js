import { initIcon } from "./icon.js";

//the url of the east outlined svg; resolved relative to this module
const URL_EASTOUTLINED = new URL('../../assets/icons/eastOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an east outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eastOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEastOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eastOutlinedIcon', url: URL_EASTOUTLINED }, ...properties);
}

/**
 * Creates an east outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eastOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEastOutlinedIcon(element, ...properties);
    return element;
}
