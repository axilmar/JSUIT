import { initIcon } from "./icon.js";

//the url of the bluetooth audio outlined svg; resolved relative to this module
const URL_BLUETOOTHAUDIOOUTLINED = new URL('../../assets/icons/bluetoothAudioOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bluetooth audio outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bluetoothAudioOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBluetoothAudioOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLUETOOTHAUDIOOUTLINED }, ...properties);
}

/**
 * Creates a bluetooth audio outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bluetoothAudioOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBluetoothAudioOutlinedIcon(element, ...properties);
    return element;
}
