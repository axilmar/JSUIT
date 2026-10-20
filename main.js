import { button } from '/src/button.js';
import { div } from '/src/div.js';
import { router, navigate } from './src/router.js';
import { checkBox } from './src/checkBox.js';

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
            checkBox({enabled: true, error: false, selected: true}, "Label")
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
                render: () => div({style: "background-color: pink; width: 64px; height: 64px"}, "Pink")
            },
            {
                path: '/blue',
                render: () => div({style: "background-color: blue; width: 64px; height: 64px"}, "Blue")
            }
        ]
    }
]);
