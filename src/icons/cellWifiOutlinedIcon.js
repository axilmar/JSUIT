import { initIcon } from "./icon.js";

//the url of the cell wifi outlined svg; resolved relative to this module
const URL_CELLWIFIOUTLINED = new URL('../../assets/icons/cellWifiOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cell wifi outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cellWifiOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCellWifiOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cellWifiOutlinedIcon', url: URL_CELLWIFIOUTLINED }, ...properties);
}

/**
 * Creates a cell wifi outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cellWifiOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCellWifiOutlinedIcon(element, ...properties);
    return element;
}
