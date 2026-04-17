import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLLegendElement.
 * 
 * The element get the class 'HTMLLegendElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLLegendElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLLegendElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLLegendElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLLegendElement for tag 'legend'.
 * 
 * The element gets the class 'legend'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const legend = (props, ...children) => {
    props ??= {};
    props.className = `legend ${props?.className ?? ''}`;
    const element = document.createElement('legend');
    return initHTMLLegendElement(element, props, ...children);
}

