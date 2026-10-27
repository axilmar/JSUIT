import { initIcon } from "./icon.js";

//the url of the local convenience store svg; resolved relative to this module
const URL_LOCALCONVENIENCESTORE = new URL('../../assets/icons/localConvenienceStore.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local convenience store icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localConvenienceStore.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalConvenienceStoreIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localConvenienceStoreIcon', url: URL_LOCALCONVENIENCESTORE }, ...properties);
}

/**
 * Creates a local convenience store icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localConvenienceStoreIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalConvenienceStoreIcon(element, ...properties);
    return element;
}
