import { initIcon } from "./icon.js";

//the url of the store outlined svg; resolved relative to this module
const URL_STOREOUTLINED = new URL('../../assets/icons/storeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a store outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/storeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStoreOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'storeOutlinedIcon', url: URL_STOREOUTLINED }, ...properties);
}

/**
 * Creates a store outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const storeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStoreOutlinedIcon(element, ...properties);
    return element;
}
