import { initIcon } from "./icon.js";

//the url of the add business outlined svg; resolved relative to this module
const URL_ADDBUSINESSOUTLINED = new URL('../../assets/icons/addBusinessOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add business outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addBusinessOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddBusinessOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addBusinessOutlinedIcon', url: URL_ADDBUSINESSOUTLINED }, ...properties);
}

/**
 * Creates an add business outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addBusinessOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddBusinessOutlinedIcon(element, ...properties);
    return element;
}
