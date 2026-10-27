import { initIcon } from "./icon.js";

//the url of the wifi tethering error outlined svg; resolved relative to this module
const URL_WIFITETHERINGERROROUTLINED = new URL('../../assets/icons/wifiTetheringErrorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi tethering error outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiTetheringErrorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiTetheringErrorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifiTetheringErrorOutlinedIcon', url: URL_WIFITETHERINGERROROUTLINED }, ...properties);
}

/**
 * Creates a wifi tethering error outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiTetheringErrorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiTetheringErrorOutlinedIcon(element, ...properties);
    return element;
}
