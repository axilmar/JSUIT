import { initIcon } from "./icon.js";

//the url of the tablet android outlined svg; resolved relative to this module
const URL_TABLETANDROIDOUTLINED = new URL('../../assets/icons/tabletAndroidOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tablet android outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tabletAndroidOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTabletAndroidOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tabletAndroidOutlinedIcon', url: URL_TABLETANDROIDOUTLINED }, ...properties);
}

/**
 * Creates a tablet android outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tabletAndroidOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTabletAndroidOutlinedIcon(element, ...properties);
    return element;
}
