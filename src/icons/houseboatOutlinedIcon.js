import { initIcon } from "./icon.js";

//the url of the houseboat outlined svg; resolved relative to this module
const URL_HOUSEBOATOUTLINED = new URL('../../assets/icons/houseboatOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a houseboat outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/houseboatOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHouseboatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'houseboatOutlinedIcon', url: URL_HOUSEBOATOUTLINED }, ...properties);
}

/**
 * Creates a houseboat outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const houseboatOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHouseboatOutlinedIcon(element, ...properties);
    return element;
}
