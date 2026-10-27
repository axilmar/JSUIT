import { initIcon } from "./icon.js";

//the url of the bluetooth outlined svg; resolved relative to this module
const URL_BLUETOOTHOUTLINED = new URL('../../assets/icons/bluetoothOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bluetooth outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bluetoothOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBluetoothOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bluetoothOutlinedIcon', url: URL_BLUETOOTHOUTLINED }, ...properties);
}

/**
 * Creates a bluetooth outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bluetoothOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBluetoothOutlinedIcon(element, ...properties);
    return element;
}
