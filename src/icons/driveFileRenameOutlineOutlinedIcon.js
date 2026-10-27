import { initIcon } from "./icon.js";

//the url of the drive file rename outline outlined svg; resolved relative to this module
const URL_DRIVEFILERENAMEOUTLINEOUTLINED = new URL('../../assets/icons/driveFileRenameOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drive file rename outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/driveFileRenameOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDriveFileRenameOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'driveFileRenameOutlineOutlinedIcon', url: URL_DRIVEFILERENAMEOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a drive file rename outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const driveFileRenameOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDriveFileRenameOutlineOutlinedIcon(element, ...properties);
    return element;
}
