import { initIcon } from "./icon.js";

//the url of the outbox outlined svg; resolved relative to this module
const URL_OUTBOXOUTLINED = new URL('../../assets/icons/outboxOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an outbox outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/outboxOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutboxOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'outboxOutlinedIcon', url: URL_OUTBOXOUTLINED }, ...properties);
}

/**
 * Creates an outbox outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const outboxOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOutboxOutlinedIcon(element, ...properties);
    return element;
}
