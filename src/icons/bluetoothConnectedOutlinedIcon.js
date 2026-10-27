import { initIcon } from "./icon.js";

//the url of the bluetooth connected outlined svg; resolved relative to this module
const URL_BLUETOOTHCONNECTEDOUTLINED = new URL('../../assets/icons/bluetoothConnectedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bluetooth connected outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bluetoothConnectedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBluetoothConnectedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bluetoothConnectedOutlinedIcon', url: URL_BLUETOOTHCONNECTEDOUTLINED }, ...properties);
}

/**
 * Creates a bluetooth connected outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bluetoothConnectedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBluetoothConnectedOutlinedIcon(element, ...properties);
    return element;
}
