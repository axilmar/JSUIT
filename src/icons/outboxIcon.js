import { initIcon } from "./icon.js";

//the url of the outbox svg; resolved relative to this module
const URL_OUTBOX = new URL('../../assets/icons/outbox.svg', import.meta.url).href;

/**
 * Initializes an icon element as an outbox icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/outbox.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutboxIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'outboxIcon', url: URL_OUTBOX }, ...properties);
}

/**
 * Creates an outbox icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const outboxIcon = (...properties) => {
    const element = document.createElement('div');
    initOutboxIcon(element, ...properties);
    return element;
}
