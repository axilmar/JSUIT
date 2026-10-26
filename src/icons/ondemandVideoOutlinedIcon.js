import { initIcon } from "./icon.js";

//the url of the ondemand video outlined svg; resolved relative to this module
const URL_ONDEMANDVIDEOOUTLINED = new URL('../../assets/icons/ondemandVideoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ondemand video outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ondemandVideoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOndemandVideoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ONDEMANDVIDEOOUTLINED }, ...properties);
}

/**
 * Creates an ondemand video outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ondemandVideoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOndemandVideoOutlinedIcon(element, ...properties);
    return element;
}
