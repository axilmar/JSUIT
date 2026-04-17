import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTrackElement.
 * 
 * The element get the class 'HTMLTrackElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLTrackElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLTrackElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLTrackElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLTrackElement for tag 'track'.
 * 
 * The element gets the class 'track'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const track = (props, ...children) => {
    props ??= {};
    props.className = `track ${props?.className ?? ''}`;
    const element = document.createElement('track');
    return initHTMLTrackElement(element, props, ...children);
}

