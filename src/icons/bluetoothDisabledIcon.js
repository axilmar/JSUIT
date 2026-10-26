import { initIcon } from "./icon.js";

//the url of the bluetooth disabled svg; resolved relative to this module
const URL_BLUETOOTHDISABLED = new URL('../../assets/icons/bluetoothDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bluetooth disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bluetoothDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBluetoothDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLUETOOTHDISABLED }, ...properties);
}

/**
 * Creates a bluetooth disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bluetoothDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initBluetoothDisabledIcon(element, ...properties);
    return element;
}
