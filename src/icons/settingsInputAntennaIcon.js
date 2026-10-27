import { initIcon } from "./icon.js";

//the url of the settings input antenna svg; resolved relative to this module
const URL_SETTINGSINPUTANTENNA = new URL('../../assets/icons/settingsInputAntenna.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings input antenna icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsInputAntenna.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsInputAntennaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsInputAntennaIcon', url: URL_SETTINGSINPUTANTENNA }, ...properties);
}

/**
 * Creates a settings input antenna icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsInputAntennaIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsInputAntennaIcon(element, ...properties);
    return element;
}
