import { initIcon } from "./icon.js";

//the url of the markunread mailbox outlined svg; resolved relative to this module
const URL_MARKUNREADMAILBOXOUTLINED = new URL('../../assets/icons/markunreadMailboxOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a markunread mailbox outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markunreadMailboxOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkunreadMailboxOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'markunreadMailboxOutlinedIcon', url: URL_MARKUNREADMAILBOXOUTLINED }, ...properties);
}

/**
 * Creates a markunread mailbox outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markunreadMailboxOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkunreadMailboxOutlinedIcon(element, ...properties);
    return element;
}
