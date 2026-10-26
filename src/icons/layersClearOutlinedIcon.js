import { initIcon } from "./icon.js";

//the url of the layers clear outlined svg; resolved relative to this module
const URL_LAYERSCLEAROUTLINED = new URL('../../assets/icons/layersClearOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a layers clear outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/layersClearOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLayersClearOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LAYERSCLEAROUTLINED }, ...properties);
}

/**
 * Creates a layers clear outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const layersClearOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLayersClearOutlinedIcon(element, ...properties);
    return element;
}
