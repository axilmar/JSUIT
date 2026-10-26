import { initIcon } from "./icon.js";

//the url of the edit notifications outlined svg; resolved relative to this module
const URL_EDITNOTIFICATIONSOUTLINED = new URL('../../assets/icons/editNotificationsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit notifications outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editNotificationsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditNotificationsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EDITNOTIFICATIONSOUTLINED }, ...properties);
}

/**
 * Creates an edit notifications outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editNotificationsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEditNotificationsOutlinedIcon(element, ...properties);
    return element;
}
