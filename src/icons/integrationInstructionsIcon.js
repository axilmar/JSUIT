import { initIcon } from "./icon.js";

//the url of the integration instructions svg; resolved relative to this module
const URL_INTEGRATIONINSTRUCTIONS = new URL('../../assets/icons/integrationInstructions.svg', import.meta.url).href;

/**
 * Initializes an icon element as an integration instructions icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/integrationInstructions.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIntegrationInstructionsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'integrationInstructionsIcon', url: URL_INTEGRATIONINSTRUCTIONS }, ...properties);
}

/**
 * Creates an integration instructions icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const integrationInstructionsIcon = (...properties) => {
    const element = document.createElement('div');
    initIntegrationInstructionsIcon(element, ...properties);
    return element;
}
