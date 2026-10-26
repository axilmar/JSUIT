import { initIcon } from "./icon.js";

//the url of the bluetooth searching outlined svg; resolved relative to this module
const URL_BLUETOOTHSEARCHINGOUTLINED = new URL('../../assets/icons/bluetoothSearchingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bluetooth searching outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bluetoothSearchingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBluetoothSearchingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLUETOOTHSEARCHINGOUTLINED }, ...properties);
}

/**
 * Creates a bluetooth searching outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bluetoothSearchingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBluetoothSearchingOutlinedIcon(element, ...properties);
    return element;
}
