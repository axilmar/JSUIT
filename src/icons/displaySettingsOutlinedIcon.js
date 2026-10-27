import { initIcon } from "./icon.js";

//the url of the display settings outlined svg; resolved relative to this module
const URL_DISPLAYSETTINGSOUTLINED = new URL('../../assets/icons/displaySettingsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a display settings outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/displaySettingsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDisplaySettingsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'displaySettingsOutlinedIcon', url: URL_DISPLAYSETTINGSOUTLINED }, ...properties);
}

/**
 * Creates a display settings outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const displaySettingsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDisplaySettingsOutlinedIcon(element, ...properties);
    return element;
}
