import './init.js';

/**
 * Initializes an element.
 * 
 * The element gets the class `Element`.
 * 
 * @param {*} element the element to initialize.
 * 
 * @param {*} props the properties object; 
 *  each property contained in this object is used to initialize the relevant property of the element;
 *  if a property value contains the method `apply(element, propertyName, propertyValue)`, 
 *  then it is invoked, otherwise the property is set directly on the element.
 * 
 * @param  {...any} children the children; 
 *  appended to the element.
 */
export const initElement = (element, props, ...children) => {
    //init missing argument values
    props ??= {};
    children ??= [];

    //ensure the element inherits from Element
    console.assert(element instanceof Element);

    //add the Element class name
    props.className = `Element ${props?.className ?? ''}`;

    //set the element properties
    for(const propName in props) {
        const prop = props[propName];
        if (prop.apply) {
            prop.apply(element, propName, prop);
        }
        else {
            element[propName] = prop;
        }
    }

    //add the children
    element.append(...children);
}
