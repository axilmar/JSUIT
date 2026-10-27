import { initIcon } from "./icon.js";

//the url of the settings ethernet svg; resolved relative to this module
const URL_SETTINGSETHERNET = new URL('../../assets/icons/settingsEthernet.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings ethernet icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsEthernet.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsEthernetIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsEthernetIcon', url: URL_SETTINGSETHERNET }, ...properties);
}

/**
 * Creates a settings ethernet icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsEthernetIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsEthernetIcon(element, ...properties);
    return element;
}
