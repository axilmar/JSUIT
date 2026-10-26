import { initIcon } from "./icon.js";

//the url of the data saver on svg; resolved relative to this module
const URL_DATASAVERON = new URL('../../assets/icons/dataSaverOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a data saver on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dataSaverOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDataSaverOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DATASAVERON }, ...properties);
}

/**
 * Creates a data saver on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dataSaverOnIcon = (...properties) => {
    const element = document.createElement('div');
    initDataSaverOnIcon(element, ...properties);
    return element;
}
