import { initIcon } from "./icon.js";

//the url of the bluetooth drive svg; resolved relative to this module
const URL_BLUETOOTHDRIVE = new URL('../../assets/icons/bluetoothDrive.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bluetooth drive icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bluetoothDrive.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBluetoothDriveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLUETOOTHDRIVE }, ...properties);
}

/**
 * Creates a bluetooth drive icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bluetoothDriveIcon = (...properties) => {
    const element = document.createElement('div');
    initBluetoothDriveIcon(element, ...properties);
    return element;
}
