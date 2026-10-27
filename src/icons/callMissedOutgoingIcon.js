import { initIcon } from "./icon.js";

//the url of the call missed outgoing svg; resolved relative to this module
const URL_CALLMISSEDOUTGOING = new URL('../../assets/icons/callMissedOutgoing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call missed outgoing icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callMissedOutgoing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallMissedOutgoingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'callMissedOutgoingIcon', url: URL_CALLMISSEDOUTGOING }, ...properties);
}

/**
 * Creates a call missed outgoing icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callMissedOutgoingIcon = (...properties) => {
    const element = document.createElement('div');
    initCallMissedOutgoingIcon(element, ...properties);
    return element;
}
