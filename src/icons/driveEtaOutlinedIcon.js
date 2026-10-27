import { initIcon } from "./icon.js";

//the url of the drive eta outlined svg; resolved relative to this module
const URL_DRIVEETAOUTLINED = new URL('../../assets/icons/driveEtaOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drive eta outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/driveEtaOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDriveEtaOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'driveEtaOutlinedIcon', url: URL_DRIVEETAOUTLINED }, ...properties);
}

/**
 * Creates a drive eta outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const driveEtaOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDriveEtaOutlinedIcon(element, ...properties);
    return element;
}
