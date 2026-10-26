import { initIcon } from "./icon.js";

//the url of the drive file move svg; resolved relative to this module
const URL_DRIVEFILEMOVE = new URL('../../assets/icons/driveFileMove.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drive file move icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/driveFileMove.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDriveFileMoveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DRIVEFILEMOVE }, ...properties);
}

/**
 * Creates a drive file move icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const driveFileMoveIcon = (...properties) => {
    const element = document.createElement('div');
    initDriveFileMoveIcon(element, ...properties);
    return element;
}
