import { initIcon } from "./icon.js";

//the url of the phone bluetooth speaker svg; resolved relative to this module
const URL_PHONEBLUETOOTHSPEAKER = new URL('../../assets/icons/phoneBluetoothSpeaker.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone bluetooth speaker icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneBluetoothSpeaker.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneBluetoothSpeakerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHONEBLUETOOTHSPEAKER }, ...properties);
}

/**
 * Creates a phone bluetooth speaker icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneBluetoothSpeakerIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneBluetoothSpeakerIcon(element, ...properties);
    return element;
}
