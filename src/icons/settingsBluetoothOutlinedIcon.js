import { initIcon } from "./icon.js";

//the url of the settings bluetooth outlined svg; resolved relative to this module
const URL_SETTINGSBLUETOOTHOUTLINED = new URL('../../assets/icons/settingsBluetoothOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings bluetooth outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsBluetoothOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsBluetoothOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsBluetoothOutlinedIcon', url: URL_SETTINGSBLUETOOTHOUTLINED }, ...properties);
}

/**
 * Creates a settings bluetooth outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsBluetoothOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsBluetoothOutlinedIcon(element, ...properties);
    return element;
}
