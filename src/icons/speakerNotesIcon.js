import { initIcon } from "./icon.js";

//the url of the speaker notes svg; resolved relative to this module
const URL_SPEAKERNOTES = new URL('../../assets/icons/speakerNotes.svg', import.meta.url).href;

/**
 * Initializes an icon element as a speaker notes icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/speakerNotes.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpeakerNotesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'speakerNotesIcon', url: URL_SPEAKERNOTES }, ...properties);
}

/**
 * Creates a speaker notes icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const speakerNotesIcon = (...properties) => {
    const element = document.createElement('div');
    initSpeakerNotesIcon(element, ...properties);
    return element;
}
