import { initHTMLMediaElement } from "./HTMLMediaElement.js";

/**
 * Initializes an instance of HTMLAudioElement.
 * 
 * The element get the class 'HTMLAudioElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLAudioElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLAudioElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLAudioElement ${props?.className ?? ''}`;
    return initHTMLMediaElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLAudioElement for tag 'audio'.
 * 
 * The element gets the class 'audio'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const audio = (props, ...children) => {
    props ??= {};
    props.className = `audio ${props?.className ?? ''}`;
    const element = document.createElement('audio');
    return initHTMLAudioElement(element, props, ...children);
}

