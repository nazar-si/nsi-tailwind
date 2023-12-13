import colors from 'tailwindcss/colors';


export const starbucks = {
    theme: {
        fontFamily: {
            'sans': ['Proxima Nova', 'Helvetica Neue', 'Arial', 'sans-serif'],
        },
        borderRadius: {
            md: '8px',
            sm: '0',
            lg: '12px',
            xl: '50px',
        },
        colors: {
            primary: {
                '50': 'rgba(235 254 243 / <alpha-value>)',
                '100': 'rgba(208 251 225 / <alpha-value>)',
                '200': 'rgba(164 246 201 / <alpha-value>)',
                '300': 'rgba(106 235 173 / <alpha-value>)',
                '400': 'rgba(10 191 116 / <alpha-value>)',
                '500': 'rgba(0 117 74 / <alpha-value>)',
                '600': 'rgba(0 117 74 / <alpha-value>)',
                '700': 'rgba(0 112 74 / <alpha-value>)',
                '800': 'rgba(1 83 56 / <alpha-value>)',
                '900': 'rgba(0 47 32 / <alpha-value>)',
                '950': 'rgba(0 0 0 / <alpha-value>)',
                DEFAULT: 'rgba(0 117 74 / <alpha-value>)',
            },
            secondary: {
                '950': colors.black,
                '900': colors.black,
                '800': colors.black,
                '700': colors.black,
                '600': colors.gray['950'],
                '500': colors.gray['900'],
                '400': colors.gray['700'],
                '300': colors.gray['500'],
                '200': colors.gray['300'],
                '100': colors.gray['100'],
                '50': colors.gray['50'],
                DEFAULT: colors.gray['900'],
            },
            error: {
                ...colors.red,
                DEFAULT: colors.red['500'],
            },
            gray: {
                '50': 'rgba(248 247 244 / <alpha-value>)',
                '100': 'rgba(242 240 235 / <alpha-value>)',
                '200': 'rgba(221 216 203 / <alpha-value>)',
                '300': 'rgba(199 189 170 / <alpha-value>)',
                '400': 'rgba(176 159 135 / <alpha-value>)',
                '500': 'rgba(160 138 111 / <alpha-value>)',
                '600': 'rgba(147 123 99 / <alpha-value>)',
                '700': 'rgba(122 100 84 / <alpha-value>)',
                '800': 'rgba(100 83 72 / <alpha-value>)',
                '900': 'rgba(82 68 60 / <alpha-value>)',
                '950': 'rgba(43 35 31 / <alpha-value>)',
                DEFAULT: 'rgba(160 138 111 / <alpha-value>)',
            }
        }
    }
}