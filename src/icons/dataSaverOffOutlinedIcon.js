import { initIcon } from "./icon.js";

//the url of the data saver off outlined svg; resolved relative to this module
const URL_DATASAVEROFFOUTLINED = new URL('../../assets/icons/dataSaverOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a data saver off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dataSaverOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDataSaverOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DATASAVEROFFOUTLINED }, ...properties);
}

/**
 * Creates a data saver off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dataSaverOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDataSaverOffOutlinedIcon(element, ...properties);
    return element;
}
