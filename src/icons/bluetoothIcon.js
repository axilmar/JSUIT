import { initIcon } from "./icon.js";

//the url of the bluetooth svg; resolved relative to this module
const URL_BLUETOOTH = new URL('../../assets/icons/bluetooth.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bluetooth icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bluetooth.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBluetoothIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLUETOOTH }, ...properties);
}

/**
 * Creates a bluetooth icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bluetoothIcon = (...properties) => {
    const element = document.createElement('div');
    initBluetoothIcon(element, ...properties);
    return element;
}
