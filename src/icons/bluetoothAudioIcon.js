import { initIcon } from "./icon.js";

//the url of the bluetooth audio svg; resolved relative to this module
const URL_BLUETOOTHAUDIO = new URL('../../assets/icons/bluetoothAudio.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bluetooth audio icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bluetoothAudio.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBluetoothAudioIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bluetoothAudioIcon', url: URL_BLUETOOTHAUDIO }, ...properties);
}

/**
 * Creates a bluetooth audio icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bluetoothAudioIcon = (...properties) => {
    const element = document.createElement('div');
    initBluetoothAudioIcon(element, ...properties);
    return element;
}
