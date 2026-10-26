import { initIcon } from "./icon.js";

//the url of the model training svg; resolved relative to this module
const URL_MODELTRAINING = new URL('../../assets/icons/modelTraining.svg', import.meta.url).href;

/**
 * Initializes an icon element as a model training icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modelTraining.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModelTrainingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MODELTRAINING }, ...properties);
}

/**
 * Creates a model training icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modelTrainingIcon = (...properties) => {
    const element = document.createElement('div');
    initModelTrainingIcon(element, ...properties);
    return element;
}
