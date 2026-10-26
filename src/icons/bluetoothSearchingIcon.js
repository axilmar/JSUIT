import { initIcon } from "./icon.js";

//the url of the bluetooth searching svg; resolved relative to this module
const URL_BLUETOOTHSEARCHING = new URL('../../assets/icons/bluetoothSearching.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bluetooth searching icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bluetoothSearching.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBluetoothSearchingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLUETOOTHSEARCHING }, ...properties);
}

/**
 * Creates a bluetooth searching icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bluetoothSearchingIcon = (...properties) => {
    const element = document.createElement('div');
    initBluetoothSearchingIcon(element, ...properties);
    return element;
}
