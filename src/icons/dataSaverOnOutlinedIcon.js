import { initIcon } from "./icon.js";

//the url of the data saver on outlined svg; resolved relative to this module
const URL_DATASAVERONOUTLINED = new URL('../../assets/icons/dataSaverOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a data saver on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dataSaverOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDataSaverOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DATASAVERONOUTLINED }, ...properties);
}

/**
 * Creates a data saver on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dataSaverOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDataSaverOnOutlinedIcon(element, ...properties);
    return element;
}
