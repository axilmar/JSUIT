import { initIcon } from "./icon.js";

//the url of the upgrade outlined svg; resolved relative to this module
const URL_UPGRADEOUTLINED = new URL('../../assets/icons/upgradeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an upgrade outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/upgradeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUpgradeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UPGRADEOUTLINED }, ...properties);
}

/**
 * Creates an upgrade outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const upgradeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUpgradeOutlinedIcon(element, ...properties);
    return element;
}
