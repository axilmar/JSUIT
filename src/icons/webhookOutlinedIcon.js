import { initIcon } from "./icon.js";

//the url of the webhook outlined svg; resolved relative to this module
const URL_WEBHOOKOUTLINED = new URL('../../assets/icons/webhookOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a webhook outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/webhookOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWebhookOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'webhookOutlinedIcon', url: URL_WEBHOOKOUTLINED }, ...properties);
}

/**
 * Creates a webhook outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const webhookOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWebhookOutlinedIcon(element, ...properties);
    return element;
}
