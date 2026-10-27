import { initIcon } from "./icon.js";

//the url of the wifi protected setup svg; resolved relative to this module
const URL_WIFIPROTECTEDSETUP = new URL('../../assets/icons/wifiProtectedSetup.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi protected setup icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiProtectedSetup.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiProtectedSetupIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifiProtectedSetupIcon', url: URL_WIFIPROTECTEDSETUP }, ...properties);
}

/**
 * Creates a wifi protected setup icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiProtectedSetupIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiProtectedSetupIcon(element, ...properties);
    return element;
}
