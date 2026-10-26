import { initIcon } from "./icon.js";

//the url of the media bluetooth on svg; resolved relative to this module
const URL_MEDIABLUETOOTHON = new URL('../../assets/icons/mediaBluetoothOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a media bluetooth on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mediaBluetoothOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMediaBluetoothOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MEDIABLUETOOTHON }, ...properties);
}

/**
 * Creates a media bluetooth on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mediaBluetoothOnIcon = (...properties) => {
    const element = document.createElement('div');
    initMediaBluetoothOnIcon(element, ...properties);
    return element;
}
