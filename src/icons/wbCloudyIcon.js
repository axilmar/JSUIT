import { initIcon } from "./icon.js";

//the url of the wb cloudy svg; resolved relative to this module
const URL_WBCLOUDY = new URL('../../assets/icons/wbCloudy.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb cloudy icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbCloudy.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbCloudyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wbCloudyIcon', url: URL_WBCLOUDY }, ...properties);
}

/**
 * Creates a wb cloudy icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbCloudyIcon = (...properties) => {
    const element = document.createElement('div');
    initWbCloudyIcon(element, ...properties);
    return element;
}
