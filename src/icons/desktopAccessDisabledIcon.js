import { initIcon } from "./icon.js";

//the url of the desktop access disabled svg; resolved relative to this module
const URL_DESKTOPACCESSDISABLED = new URL('../../assets/icons/desktopAccessDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a desktop access disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/desktopAccessDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDesktopAccessDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'desktopAccessDisabledIcon', url: URL_DESKTOPACCESSDISABLED }, ...properties);
}

/**
 * Creates a desktop access disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const desktopAccessDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initDesktopAccessDisabledIcon(element, ...properties);
    return element;
}
