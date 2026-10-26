import { initIcon } from "./icon.js";

//the url of the desktop access disabled outlined svg; resolved relative to this module
const URL_DESKTOPACCESSDISABLEDOUTLINED = new URL('../../assets/icons/desktopAccessDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a desktop access disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/desktopAccessDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDesktopAccessDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DESKTOPACCESSDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a desktop access disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const desktopAccessDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDesktopAccessDisabledOutlinedIcon(element, ...properties);
    return element;
}
