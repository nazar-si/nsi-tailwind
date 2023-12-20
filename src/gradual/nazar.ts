import colors from 'tailwindcss/colors';

export const nazar = {
        colors: {
            primary: {
                ...colors.blue,
                DEFAULT: colors.blue['500'],
            },
            secondary: {
                ...colors.indigo,
                DEFAULT: colors.indigo['500'],
            },
            error: {
                ...colors.rose,
                DEFAULT: colors.rose['500'],
            },
            gray: {
                '50': 'rgb(245 245 246 / <alpha-value>)',
                '100': 'rgb(230 230 231 / <alpha-value>)',
                '200': 'rgb(207 207 210 / <alpha-value>)',
                '300': 'rgb(173 173 179 / <alpha-value>)',
                '400': 'rgb(132 132 140 / <alpha-value>)',
                '500': 'rgb(113 113 122 / <alpha-value>)',
                '600': 'rgb(90 90 96 / <alpha-value>)',
                '700': 'rgb(69 69 74 / <alpha-value>)',
                '800': 'rgb(49 49 53 / <alpha-value>)',
                '900': 'rgb(38 37 39 / <alpha-value>)',
                '950': 'rgb(0 0 0 / <alpha-value>)',
                DEFAULT: 'rgb(113 113 122 / <alpha-value>)',
            }
        }
}