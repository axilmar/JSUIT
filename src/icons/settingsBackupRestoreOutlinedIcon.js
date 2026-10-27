import { initIcon } from "./icon.js";

//the url of the settings backup restore outlined svg; resolved relative to this module
const URL_SETTINGSBACKUPRESTOREOUTLINED = new URL('../../assets/icons/settingsBackupRestoreOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings backup restore outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsBackupRestoreOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsBackupRestoreOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsBackupRestoreOutlinedIcon', url: URL_SETTINGSBACKUPRESTOREOUTLINED }, ...properties);
}

/**
 * Creates a settings backup restore outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsBackupRestoreOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsBackupRestoreOutlinedIcon(element, ...properties);
    return element;
}
