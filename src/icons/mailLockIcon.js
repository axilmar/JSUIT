import { initIcon } from "./icon.js";

//the url of the mail lock svg; resolved relative to this module
const URL_MAILLOCK = new URL('../../assets/icons/mailLock.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mail lock icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mailLock.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMailLockIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mailLockIcon', url: URL_MAILLOCK }, ...properties);
}

/**
 * Creates a mail lock icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mailLockIcon = (...properties) => {
    const element = document.createElement('div');
    initMailLockIcon(element, ...properties);
    return element;
}
