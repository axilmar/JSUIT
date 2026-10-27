import { initIcon } from "./icon.js";

//the url of the upgrade svg; resolved relative to this module
const URL_UPGRADE = new URL('../../assets/icons/upgrade.svg', import.meta.url).href;

/**
 * Initializes an icon element as an upgrade icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/upgrade.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUpgradeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'upgradeIcon', url: URL_UPGRADE }, ...properties);
}

/**
 * Creates an upgrade icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const upgradeIcon = (...properties) => {
    const element = document.createElement('div');
    initUpgradeIcon(element, ...properties);
    return element;
}
