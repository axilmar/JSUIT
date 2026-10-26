import { initIcon } from "./icon.js";

//the url of the record voice over outlined svg; resolved relative to this module
const URL_RECORDVOICEOVEROUTLINED = new URL('../../assets/icons/recordVoiceOverOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a record voice over outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/recordVoiceOverOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRecordVoiceOverOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RECORDVOICEOVEROUTLINED }, ...properties);
}

/**
 * Creates a record voice over outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const recordVoiceOverOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRecordVoiceOverOutlinedIcon(element, ...properties);
    return element;
}
