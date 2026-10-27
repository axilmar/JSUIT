import { initIcon } from "./icon.js";

//the url of the display settings svg; resolved relative to this module
const URL_DISPLAYSETTINGS = new URL('../../assets/icons/displaySettings.svg', import.meta.url).href;

/**
 * Initializes an icon element as a display settings icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/displaySettings.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDisplaySettingsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'displaySettingsIcon', url: URL_DISPLAYSETTINGS }, ...properties);
}

/**
 * Creates a display settings icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const displaySettingsIcon = (...properties) => {
    const element = document.createElement('div');
    initDisplaySettingsIcon(element, ...properties);
    return element;
}
