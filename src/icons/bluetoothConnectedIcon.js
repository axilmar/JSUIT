import { initIcon } from "./icon.js";

//the url of the bluetooth connected svg; resolved relative to this module
const URL_BLUETOOTHCONNECTED = new URL('../../assets/icons/bluetoothConnected.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bluetooth connected icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bluetoothConnected.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBluetoothConnectedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLUETOOTHCONNECTED }, ...properties);
}

/**
 * Creates a bluetooth connected icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bluetoothConnectedIcon = (...properties) => {
    const element = document.createElement('div');
    initBluetoothConnectedIcon(element, ...properties);
    return element;
}
