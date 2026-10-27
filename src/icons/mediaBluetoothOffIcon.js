import { initIcon } from "./icon.js";

//the url of the media bluetooth off svg; resolved relative to this module
const URL_MEDIABLUETOOTHOFF = new URL('../../assets/icons/mediaBluetoothOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a media bluetooth off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mediaBluetoothOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMediaBluetoothOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mediaBluetoothOffIcon', url: URL_MEDIABLUETOOTHOFF }, ...properties);
}

/**
 * Creates a media bluetooth off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mediaBluetoothOffIcon = (...properties) => {
    const element = document.createElement('div');
    initMediaBluetoothOffIcon(element, ...properties);
    return element;
}
