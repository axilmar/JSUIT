import { initIcon } from "./icon.js";

//the url of the wb cloudy outlined svg; resolved relative to this module
const URL_WBCLOUDYOUTLINED = new URL('../../assets/icons/wbCloudyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb cloudy outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbCloudyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbCloudyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wbCloudyOutlinedIcon', url: URL_WBCLOUDYOUTLINED }, ...properties);
}

/**
 * Creates a wb cloudy outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbCloudyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWbCloudyOutlinedIcon(element, ...properties);
    return element;
}
