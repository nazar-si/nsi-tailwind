import colors from 'tailwindcss/colors';

export const official = {
    theme: {
        colors: {
            primary: {
                ...colors.indigo,
                DEFAULT: colors.indigo['500'],
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
                ...colors.rose,
                DEFAULT: colors.rose['500'],
            },
            gray: {
                ...colors.gray,
                DEFAULT: colors.gray['500'],
            }
        }
    }
}