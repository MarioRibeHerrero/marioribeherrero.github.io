﻿import tailwindScrollbar from 'tailwind-scrollbar';

export default {
    content:[
        "./index.html"
        ,"./src/**/*.{js,jsx,ts,tsx}"

    ],
    theme: {
        extend: {
            fontFamily: {
                'sans' : ['Inter', 'sans-serif']
            }
        },
    },
    plugins: [tailwindScrollbar],
}