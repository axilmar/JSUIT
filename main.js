import { button } from '/src/button.js';
import { div } from '/src/div.js';
import { router, navigate } from './src/router.js';
import { checkBox } from './src/checkBox.js';
import { radioButton } from '/src/radioButton.js';
import { label } from '/src/label.js';

const createApp = () => {
    return div(
        {
            style: "width: 100%; height: 100%; display: flex; flex-direction: column"
        },
        div(
            {
                style: "width: 100%; display: flex; flex-direction: row; gap: 0"
            },
            button({ onclick: () => navigate('/app/pink') }, "Pink"),
            button({ onclick: () => navigate('/app/blue') }, "Blue"),
            "Press a button - Πιεσε ενα πληκτρο",
            checkBox({id: "cb1"}, "Label"),
            radioButton({name: "option1"}, "Radio 1"),
            radioButton({name: "option1", id: "radio2"}, "Radio 2"),
        ),
        div(
            {
                style: "background-color: cyan; width: 100%; height: 75%",
                additionalClassName: 'outlet'
            }
        )
    );
}

router([
    {
        path: '/',
        render: '/app'
    },
    {
        path: '/app',
        render: createApp(),
        children: [
            {
                path: '/pink',
                render: () => div({
                    style: "background-color: pink; width: 64px; height: 64px", 
                    onrouted: () => console.log("pink routed!"),
                    onunrouted: () => console.log("pink unrouted!")
                    }, 
                    "Pink"
                )
            },
            {
                path: '/blue',
                render: () => div({
                    style: "background-color: blue; width: 64px; height: 64px", 
                    onrouted: () => console.log("blue routed!"),
                    onunrouted: () => console.log("blue unrouted!")
                    }, 
                    "Blue"
                )
            }
        ]
    }
]);
