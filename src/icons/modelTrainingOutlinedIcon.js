import { initIcon } from "./icon.js";

//the url of the model training outlined svg; resolved relative to this module
const URL_MODELTRAININGOUTLINED = new URL('../../assets/icons/modelTrainingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a model training outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modelTrainingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModelTrainingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MODELTRAININGOUTLINED }, ...properties);
}

/**
 * Creates a model training outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modelTrainingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initModelTrainingOutlinedIcon(element, ...properties);
    return element;
}
