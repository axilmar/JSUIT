import { initIcon } from "./icon.js";

//the url of the no transfer outlined svg; resolved relative to this module
const URL_NOTRANSFEROUTLINED = new URL('../../assets/icons/noTransferOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no transfer outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noTransferOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoTransferOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noTransferOutlinedIcon', url: URL_NOTRANSFEROUTLINED }, ...properties);
}

/**
 * Creates a no transfer outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noTransferOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoTransferOutlinedIcon(element, ...properties);
    return element;
}
