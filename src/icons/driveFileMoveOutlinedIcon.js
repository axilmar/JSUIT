import { initIcon } from "./icon.js";

//the url of the drive file move outlined svg; resolved relative to this module
const URL_DRIVEFILEMOVEOUTLINED = new URL('../../assets/icons/driveFileMoveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drive file move outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/driveFileMoveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDriveFileMoveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'driveFileMoveOutlinedIcon', url: URL_DRIVEFILEMOVEOUTLINED }, ...properties);
}

/**
 * Creates a drive file move outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const driveFileMoveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDriveFileMoveOutlinedIcon(element, ...properties);
    return element;
}
