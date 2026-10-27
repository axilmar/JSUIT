import { initIcon } from "./icon.js";

//the url of the data array outlined svg; resolved relative to this module
const URL_DATAARRAYOUTLINED = new URL('../../assets/icons/dataArrayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a data array outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dataArrayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDataArrayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dataArrayOutlinedIcon', url: URL_DATAARRAYOUTLINED }, ...properties);
}

/**
 * Creates a data array outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dataArrayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDataArrayOutlinedIcon(element, ...properties);
    return element;
}
