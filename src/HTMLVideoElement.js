import { initHTMLMediaElement } from "./HTMLMediaElement.js";

/**
 * Initializes an instance of HTMLVideoElement.
 * 
 * The element get the class 'HTMLVideoElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLVideoElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLVideoElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLVideoElement ${props?.className ?? ''}`;
    return initHTMLMediaElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLVideoElement for tag 'video'.
 * 
 * The element gets the class 'video'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const video = (props, ...children) => {
    props ??= {};
    props.className = `video ${props?.className ?? ''}`;
    const element = document.createElement('video');
    return initHTMLVideoElement(element, props, ...children);
}

