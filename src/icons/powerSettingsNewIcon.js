import { initIcon } from "./icon.js";

//the url of the power settings new svg; resolved relative to this module
const URL_POWERSETTINGSNEW = new URL('../../assets/icons/powerSettingsNew.svg', import.meta.url).href;

/**
 * Initializes an icon element as a power settings new icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/powerSettingsNew.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPowerSettingsNewIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'powerSettingsNewIcon', url: URL_POWERSETTINGSNEW }, ...properties);
}

/**
 * Creates a power settings new icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const powerSettingsNewIcon = (...properties) => {
    const element = document.createElement('div');
    initPowerSettingsNewIcon(element, ...properties);
    return element;
}
