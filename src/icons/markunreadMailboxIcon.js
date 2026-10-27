import { initIcon } from "./icon.js";

//the url of the markunread mailbox svg; resolved relative to this module
const URL_MARKUNREADMAILBOX = new URL('../../assets/icons/markunreadMailbox.svg', import.meta.url).href;

/**
 * Initializes an icon element as a markunread mailbox icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markunreadMailbox.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkunreadMailboxIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'markunreadMailboxIcon', url: URL_MARKUNREADMAILBOX }, ...properties);
}

/**
 * Creates a markunread mailbox icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markunreadMailboxIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkunreadMailboxIcon(element, ...properties);
    return element;
}
