import { initIcon } from "./icon.js";

//the url of the bluetooth drive outlined svg; resolved relative to this module
const URL_BLUETOOTHDRIVEOUTLINED = new URL('../../assets/icons/bluetoothDriveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bluetooth drive outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bluetoothDriveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBluetoothDriveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLUETOOTHDRIVEOUTLINED }, ...properties);
}

/**
 * Creates a bluetooth drive outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bluetoothDriveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBluetoothDriveOutlinedIcon(element, ...properties);
    return element;
}
