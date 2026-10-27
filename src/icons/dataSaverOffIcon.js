import { initIcon } from "./icon.js";

//the url of the data saver off svg; resolved relative to this module
const URL_DATASAVEROFF = new URL('../../assets/icons/dataSaverOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a data saver off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dataSaverOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDataSaverOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dataSaverOffIcon', url: URL_DATASAVEROFF }, ...properties);
}

/**
 * Creates a data saver off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dataSaverOffIcon = (...properties) => {
    const element = document.createElement('div');
    initDataSaverOffIcon(element, ...properties);
    return element;
}
