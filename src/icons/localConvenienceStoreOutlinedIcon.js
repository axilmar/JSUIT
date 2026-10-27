import { initIcon } from "./icon.js";

//the url of the local convenience store outlined svg; resolved relative to this module
const URL_LOCALCONVENIENCESTOREOUTLINED = new URL('../../assets/icons/localConvenienceStoreOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local convenience store outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localConvenienceStoreOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalConvenienceStoreOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localConvenienceStoreOutlinedIcon', url: URL_LOCALCONVENIENCESTOREOUTLINED }, ...properties);
}

/**
 * Creates a local convenience store outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localConvenienceStoreOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalConvenienceStoreOutlinedIcon(element, ...properties);
    return element;
}
