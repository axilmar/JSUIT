import { initIcon } from "./icon.js";

//the url of the wifi tethering error svg; resolved relative to this module
const URL_WIFITETHERINGERROR = new URL('../../assets/icons/wifiTetheringError.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi tethering error icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiTetheringError.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiTetheringErrorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifiTetheringErrorIcon', url: URL_WIFITETHERINGERROR }, ...properties);
}

/**
 * Creates a wifi tethering error icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiTetheringErrorIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiTetheringErrorIcon(element, ...properties);
    return element;
}
