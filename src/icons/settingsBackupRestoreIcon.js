import { initIcon } from "./icon.js";

//the url of the settings backup restore svg; resolved relative to this module
const URL_SETTINGSBACKUPRESTORE = new URL('../../assets/icons/settingsBackupRestore.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings backup restore icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsBackupRestore.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsBackupRestoreIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsBackupRestoreIcon', url: URL_SETTINGSBACKUPRESTORE }, ...properties);
}

/**
 * Creates a settings backup restore icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsBackupRestoreIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsBackupRestoreIcon(element, ...properties);
    return element;
}
