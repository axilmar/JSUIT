import { initIcon } from "./icon.js";

//the url of the bluetooth disabled outlined svg; resolved relative to this module
const URL_BLUETOOTHDISABLEDOUTLINED = new URL('../../assets/icons/bluetoothDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bluetooth disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bluetoothDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBluetoothDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLUETOOTHDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a bluetooth disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bluetoothDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBluetoothDisabledOutlinedIcon(element, ...properties);
    return element;
}
