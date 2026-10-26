import { initIcon } from "./icon.js";

//the url of the drive file rename outline svg; resolved relative to this module
const URL_DRIVEFILERENAMEOUTLINE = new URL('../../assets/icons/driveFileRenameOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drive file rename outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/driveFileRenameOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDriveFileRenameOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DRIVEFILERENAMEOUTLINE }, ...properties);
}

/**
 * Creates a drive file rename outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const driveFileRenameOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initDriveFileRenameOutlineIcon(element, ...properties);
    return element;
}
