import { initIcon } from "./icon.js";

//the url of the media bluetooth off outlined svg; resolved relative to this module
const URL_MEDIABLUETOOTHOFFOUTLINED = new URL('../../assets/icons/mediaBluetoothOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a media bluetooth off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mediaBluetoothOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMediaBluetoothOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mediaBluetoothOffOutlinedIcon', url: URL_MEDIABLUETOOTHOFFOUTLINED }, ...properties);
}

/**
 * Creates a media bluetooth off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mediaBluetoothOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMediaBluetoothOffOutlinedIcon(element, ...properties);
    return element;
}
