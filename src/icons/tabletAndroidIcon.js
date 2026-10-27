import { initIcon } from "./icon.js";

//the url of the tablet android svg; resolved relative to this module
const URL_TABLETANDROID = new URL('../../assets/icons/tabletAndroid.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tablet android icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tabletAndroid.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTabletAndroidIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tabletAndroidIcon', url: URL_TABLETANDROID }, ...properties);
}

/**
 * Creates a tablet android icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tabletAndroidIcon = (...properties) => {
    const element = document.createElement('div');
    initTabletAndroidIcon(element, ...properties);
    return element;
}
