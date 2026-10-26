import { initIcon } from "./icon.js";

//the url of the drive folder upload svg; resolved relative to this module
const URL_DRIVEFOLDERUPLOAD = new URL('../../assets/icons/driveFolderUpload.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drive folder upload icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/driveFolderUpload.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDriveFolderUploadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DRIVEFOLDERUPLOAD }, ...properties);
}

/**
 * Creates a drive folder upload icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const driveFolderUploadIcon = (...properties) => {
    const element = document.createElement('div');
    initDriveFolderUploadIcon(element, ...properties);
    return element;
}
