import { initIcon } from "./icon.js";

//the url of the foundation outlined svg; resolved relative to this module
const URL_FOUNDATIONOUTLINED = new URL('../../assets/icons/foundationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a foundation outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/foundationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFoundationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'foundationOutlinedIcon', url: URL_FOUNDATIONOUTLINED }, ...properties);
}

/**
 * Creates a foundation outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const foundationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFoundationOutlinedIcon(element, ...properties);
    return element;
}
