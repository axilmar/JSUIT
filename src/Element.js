import './init.js';

/**
 * Initializes an element.
 * 
 * The element gets the class 'Element'.
 * 
 * @param {*} element the element to initialize.
 * 
 * @param {*} props the properties object; 
 *  each property contained in this object is used to initialize the relevant property of the element;
 *  if a property value contains the method `apply(element, propertyName, propertyValue)`, 
 *  then it is invoked, otherwise the property is set directly on the element.
 * 
 *  The following special properties are recognized:
 * 
 *      - `parent`: adds the element to the specific parent element.
 * 
 * @param  {...any} children the children; 
 *  appended to the element.
 * 
 * @return the element.
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

        //if prop name is parent, then append the element as a child of the parent
        if (propName === 'parent') {
            prop.append(element);
        }

        //else if 'apply' exists in property, call that
        else if (prop.apply) {
            prop.apply(element, propName, prop);
        }
        
        //else set the property
        else {
            element[propName] = prop;
        }
    }

    //add the children
    element.append(...children);

    return element;
}
