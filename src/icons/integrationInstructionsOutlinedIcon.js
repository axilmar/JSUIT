import { initIcon } from "./icon.js";

//the url of the integration instructions outlined svg; resolved relative to this module
const URL_INTEGRATIONINSTRUCTIONSOUTLINED = new URL('../../assets/icons/integrationInstructionsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an integration instructions outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/integrationInstructionsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIntegrationInstructionsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'integrationInstructionsOutlinedIcon', url: URL_INTEGRATIONINSTRUCTIONSOUTLINED }, ...properties);
}

/**
 * Creates an integration instructions outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const integrationInstructionsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initIntegrationInstructionsOutlinedIcon(element, ...properties);
    return element;
}
