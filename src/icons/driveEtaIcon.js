import { initIcon } from "./icon.js";

//the url of the drive eta svg; resolved relative to this module
const URL_DRIVEETA = new URL('../../assets/icons/driveEta.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drive eta icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/driveEta.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDriveEtaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'driveEtaIcon', url: URL_DRIVEETA }, ...properties);
}

/**
 * Creates a drive eta icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const driveEtaIcon = (...properties) => {
    const element = document.createElement('div');
    initDriveEtaIcon(element, ...properties);
    return element;
}
