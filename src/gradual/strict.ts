import colors from 'tailwindcss/colors';

export const strict = {
    theme: {
        colors: {
            primary: {
                DEFAULT: '#3B5E7F', // Blue
                '50': '#E6ECF0',
                '100': '#C6D4DF',
                '200': '#A4B5C6',
                '300': '#7B9AC3',
                '400': '#5A768F',
                '500': '#3B5E7F',
                '600': '#284460',
                '700': '#1B2F47',
                '800': '#0D1C2E',
                '900': '#010409',
            },
            secondary: {
                DEFAULT: '#6C757D', // Gray
                '50': '#F8F9FA',
                '100': '#E9ECEF',
                '200': '#DEE2E6',
                '300': '#CED4DA',
                '400': '#ADB5BD',
                '500': '#868E96',
                '600': '#6C757D',
                '700': '#5A6268',
                '800': '#44474A',
                '900': '#212529',
            },
            error: {
                DEFAULT: '#DC3545', // Red
                '50': '#FFECEE',
                '100': '#FFD5D5',
                '200': '#FFC7C7',
                '300': '#FFB8B8',
                '400': '#FFA8A8',
                '500': '#FF8787',
                '600': '#FF6B6B',
                '700': '#FF4D4D',
                '800': '#FF2A2A',
                '900': '#FF0000',
            },
            gray: {
                DEFAULT: '#6C757D', // Gray
                '50': '#F8F9FA',
                '100': '#E9ECEF',
                '200': '#DEE2E6',
                '300': '#CED4DA',
                '400': '#ADB5BD',
                '500': '#868E96',
                '600': '#6C757D',
                '700': '#5A6268',
                '800': '#44474A',
                '900': '#212529',
            }
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
        borderRadius: {
            DEFAULT: '0',
            'sm': '0',
            'md': '0',
            'lg': '8px',
            'xl': '16px',
        },
    },
}