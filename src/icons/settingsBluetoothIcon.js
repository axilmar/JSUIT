import { initIcon } from "./icon.js";

//the url of the settings bluetooth svg; resolved relative to this module
const URL_SETTINGSBLUETOOTH = new URL('../../assets/icons/settingsBluetooth.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings bluetooth icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsBluetooth.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsBluetoothIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSBLUETOOTH }, ...properties);
}

/**
 * Creates a settings bluetooth icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsBluetoothIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsBluetoothIcon(element, ...properties);
    return element;
}
