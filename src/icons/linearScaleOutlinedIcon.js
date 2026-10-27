import { initIcon } from "./icon.js";

//the url of the linear scale outlined svg; resolved relative to this module
const URL_LINEARSCALEOUTLINED = new URL('../../assets/icons/linearScaleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a linear scale outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/linearScaleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLinearScaleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'linearScaleOutlinedIcon', url: URL_LINEARSCALEOUTLINED }, ...properties);
}

/**
 * Creates a linear scale outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const linearScaleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLinearScaleOutlinedIcon(element, ...properties);
    return element;
}
