import { initIcon } from "./icon.js";

//the url of the media bluetooth on outlined svg; resolved relative to this module
const URL_MEDIABLUETOOTHONOUTLINED = new URL('../../assets/icons/mediaBluetoothOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a media bluetooth on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mediaBluetoothOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMediaBluetoothOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mediaBluetoothOnOutlinedIcon', url: URL_MEDIABLUETOOTHONOUTLINED }, ...properties);
}

/**
 * Creates a media bluetooth on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mediaBluetoothOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMediaBluetoothOnOutlinedIcon(element, ...properties);
    return element;
}
