import { initIcon } from "./icon.js";

//the url of the settings input composite svg; resolved relative to this module
const URL_SETTINGSINPUTCOMPOSITE = new URL('../../assets/icons/settingsInputComposite.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings input composite icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsInputComposite.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsInputCompositeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsInputCompositeIcon', url: URL_SETTINGSINPUTCOMPOSITE }, ...properties);
}

/**
 * Creates a settings input composite icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsInputCompositeIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsInputCompositeIcon(element, ...properties);
    return element;
}
