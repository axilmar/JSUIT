import { initIcon } from "./icon.js";

//the url of the phone bluetooth speaker outlined svg; resolved relative to this module
const URL_PHONEBLUETOOTHSPEAKEROUTLINED = new URL('../../assets/icons/phoneBluetoothSpeakerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone bluetooth speaker outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneBluetoothSpeakerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneBluetoothSpeakerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHONEBLUETOOTHSPEAKEROUTLINED }, ...properties);
}

/**
 * Creates a phone bluetooth speaker outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneBluetoothSpeakerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneBluetoothSpeakerOutlinedIcon(element, ...properties);
    return element;
}
