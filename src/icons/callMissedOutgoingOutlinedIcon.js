import { initIcon } from "./icon.js";

//the url of the call missed outgoing outlined svg; resolved relative to this module
const URL_CALLMISSEDOUTGOINGOUTLINED = new URL('../../assets/icons/callMissedOutgoingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call missed outgoing outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callMissedOutgoingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallMissedOutgoingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'callMissedOutgoingOutlinedIcon', url: URL_CALLMISSEDOUTGOINGOUTLINED }, ...properties);
}

/**
 * Creates a call missed outgoing outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callMissedOutgoingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCallMissedOutgoingOutlinedIcon(element, ...properties);
    return element;
}
