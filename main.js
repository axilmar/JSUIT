import { div, a } from './src/html.js';

div({parent: document.body, style: {backgroundColor: "yellow"}}, 
    a({href:"http://www.cnn.gr"}, 'cnn')
);
