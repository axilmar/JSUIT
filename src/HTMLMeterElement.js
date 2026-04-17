import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLMeterElement.
 * 
 * The element get the class 'HTMLMeterElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLMeterElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLMeterElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLMeterElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLMeterElement for tag 'meter'.
 * 
 * The element gets the class 'meter'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const meter = (props, ...children) => {
    props ??= {};
    props.className = `meter ${props?.className ?? ''}`;
    const element = document.createElement('meter');
    return initHTMLMeterElement(element, props, ...children);
}

