import { initIcon } from "./icon.js";

//the url of the webhook svg; resolved relative to this module
const URL_WEBHOOK = new URL('../../assets/icons/webhook.svg', import.meta.url).href;

/**
 * Initializes an icon element as a webhook icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/webhook.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWebhookIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'webhookIcon', url: URL_WEBHOOK }, ...properties);
}

/**
 * Creates a webhook icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const webhookIcon = (...properties) => {
    const element = document.createElement('div');
    initWebhookIcon(element, ...properties);
    return element;
}
