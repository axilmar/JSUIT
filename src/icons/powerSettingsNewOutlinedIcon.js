import { initIcon } from "./icon.js";

//the url of the power settings new outlined svg; resolved relative to this module
const URL_POWERSETTINGSNEWOUTLINED = new URL('../../assets/icons/powerSettingsNewOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a power settings new outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/powerSettingsNewOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPowerSettingsNewOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'powerSettingsNewOutlinedIcon', url: URL_POWERSETTINGSNEWOUTLINED }, ...properties);
}

/**
 * Creates a power settings new outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const powerSettingsNewOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPowerSettingsNewOutlinedIcon(element, ...properties);
    return element;
}
