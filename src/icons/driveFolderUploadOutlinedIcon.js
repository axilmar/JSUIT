import { initIcon } from "./icon.js";

//the url of the drive folder upload outlined svg; resolved relative to this module
const URL_DRIVEFOLDERUPLOADOUTLINED = new URL('../../assets/icons/driveFolderUploadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drive folder upload outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/driveFolderUploadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDriveFolderUploadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'driveFolderUploadOutlinedIcon', url: URL_DRIVEFOLDERUPLOADOUTLINED }, ...properties);
}

/**
 * Creates a drive folder upload outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const driveFolderUploadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDriveFolderUploadOutlinedIcon(element, ...properties);
    return element;
}
