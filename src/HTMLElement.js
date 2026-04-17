import { initElement } from './Element.js';
import { setCSSRule } from './util.js';

//defines the new properties of the element
const defineProperties = (element) => {
    //the theme property
    Object.defineProperty(element, 'theme', {
        //return the theme attribute
        get: function() {
            return this.__theme;
        },

        //sets the theme
        set: function (v) {
            //set the theme attribute
            this.__theme = v;

            //update the styles
            this.updateStyles?.();

            //set the theme of children
            for(let child = this.firstElementChild; child; child = child.nextElementSibling) {
                child.theme = v;
            }
        }
    });
}

//define the new methods of the element
const defineMethods = (element) => {
    //updates the element's styles; the default implementation updates the css styles of the element according to its theme.
    element.updateStyles = function () {
        if (this.__theme) {
            for(let classIndex = 0; classIndex < this.classList.length; ++classIndex) {
                const className = this.classList.item(classIndex);
                if (className) {
                    const classTheme = this.__theme[className];
                    if (classTheme) {
                        if (classTheme.apply) {
                            classTheme.apply(this, className, classTheme);
                        }
                        else {
                            for(const selectorExpression in classTheme) {
                                const selectorStyle = classTheme[selectorExpression];
                                if (selectorStyle) {
                                    const selectorText = `.${className}${selectorExpression}`;
                                    if (selectorStyle.apply) {
                                        selectorStyle.apply(this, selectorText, selectorStyle);
                                    }
                                    else {
                                        setCSSRule(selectorText, "style", selectorStyle);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
}

/**
 * Initializes an HTML element.
 * 
 * The element gets the class 'HTMLElement'.
 * 
 * The element gets the following new properties:
 * 
 *  - `theme`: retrieves or sets the element's theme; children also get the specified theme value.
 * 
 *  A theme object shall have the following form:
 * 
 *      {
 *          '<classNameA>': {
 *              '<selectorExpressionA>': { <CSS style> },
 *              '<selectorExpressionB>': { <CSS style> },
 *              ...
 *              '<selectorExpressionN>': { <CSS style> }
 *          },
 *          '<classNameB>': {
 *              apply : (element, className, classEntry) => { ... }
 *          },
 *          '<classNameC>': {
 *              '<selectorExpressionA>': { apply: (element, selectorText, style) => { ... } },
 *              '<selectorExpressionB>': { <CSS style> },
 *              ...
 *              '<selectorExpressionN>': { <CSS style> }
 *          },
 *          ...,
 *          '<classNameN>': {
 *              ...
 *          }
 *      }
 * 
 * i.e. a theme is a map of class names to class entries,
 * and each class entry is a map of selector expressions to style objects.
 * 
 * If a class entry or style contains an `apply` function, then is invoked,
 * otherwise the appropriate CSS rule is constructed
 * for the specific class name and selector expression.
 * 
 * For example, the following theme sets the background color and color for all elements
 * and the selection background color and color for all input elements:
 * 
 * ```javascript
 *   const theme1 = {
 *       "Element": {
 *           "": {
 *               backgroundColor: "yellow",
 *               "color": "brown",
 *           },
 *           ":disabled": {
 *               backgroundColor: "gray",
 *               "color": "red",
 *           },
 *       },
 *       "HTMLInputElement": {
 *           "::selection": {
 *               backgroundColor: "purple",
 *               color: "yellow",
 *           },
 *           ":hover::selection": {
 *               backgroundColor: "lightblue",
 *               color: "white",
 *           }
 *       }
 *   };
 * ```
 * 
 * The styles created by the above theme are:
 * 
 * ```css
 *  .Element {
 *      background-color: white;
 *      color: black;
 *  }
 * 
 *  .Element:disabled {
 *      background-color: gray;
 *      color: red;
 *  }
 * 
 *  .HTMLInputElement::selection {
 *      background-color: blue;
 *      color: yellow;
 *  }
 * 
 *  .HTMLInputElement:hover::selection {
 *      background-color: lightblue;
 *      color: white;
 *  }
 * ```
 * 
 * The element gets the following method:
 * 
 *  - `updateStyles`: updates the styles of an element according to the theme.
 *  * 
 * @param {*} element the html element to initialize.
 * @param {*} props the properties object.
 * @param  {...any} children the children. 
 * 
 * @return the element.
 */
export const initHTMLElement = (element, props, ...children) => {
    //init missing argument values
    props ??= {};
    children ??= [];

    //ensure the element inherits from HTMLElement
    console.assert(element instanceof HTMLElement);

    //define the new properties
    defineProperties(element);

    //define the new methods
    defineMethods(element);

    //add the HTMLElement class name
    props.className = `HTMLElement ${props?.className ?? ''}`;

    //special setter for 'style'
    if (props.style) {
        props.style.apply = (element, propName, style) => {
            Object.assign(element.style, style);
        }
    }

    //init the element
    return initElement(element, props, ...children);
}
