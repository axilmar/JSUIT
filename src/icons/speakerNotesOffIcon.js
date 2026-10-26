import { initIcon } from "./icon.js";

//the url of the speaker notes off svg; resolved relative to this module
const URL_SPEAKERNOTESOFF = new URL('../../assets/icons/speakerNotesOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a speaker notes off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/speakerNotesOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpeakerNotesOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPEAKERNOTESOFF }, ...properties);
}

/**
 * Creates a speaker notes off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const speakerNotesOffIcon = (...properties) => {
    const element = document.createElement('div');
    initSpeakerNotesOffIcon(element, ...properties);
    return element;
}
