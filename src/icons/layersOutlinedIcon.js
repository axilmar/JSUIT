import { initIcon } from "./icon.js";

//the url of the layers outlined svg; resolved relative to this module
const URL_LAYERSOUTLINED = new URL('../../assets/icons/layersOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a layers outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/layersOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLayersOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'layersOutlinedIcon', url: URL_LAYERSOUTLINED }, ...properties);
}

/**
 * Creates a layers outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const layersOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLayersOutlinedIcon(element, ...properties);
    return element;
}
