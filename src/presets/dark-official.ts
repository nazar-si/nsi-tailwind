import colors from 'tailwindcss/colors';

export const darkOfficial = {
    theme: {
        colors: {
            primary: {
                '950': colors.indigo['50'],
                '900': colors.indigo['100'],
                '800': colors.indigo['200'],
                '700': colors.indigo['300'],
                '600': colors.indigo['400'],
                '500': colors.indigo['500'],
                '400': colors.indigo['600'],
                '300': colors.indigo['700'],
                '200': colors.indigo['800'],
                '100': colors.indigo['900'],
                '50': colors.indigo['950'],
                DEFAULT: colors.indigo['500'],
            },
            secondary: {
                '950': colors.white,
                '900': colors.white,
                '800': colors.white,
                '700': colors.gray['50'],
                '600': colors.gray['50'],
                '500': colors.gray['100'],
                '400': colors.gray['300'],
                '300': colors.gray['500'],
                '200': colors.gray['700'],
                '100': colors.gray['900'],
                '50': colors.gray['950'],
                DEFAULT: colors.gray['100'],
            },
            error: {
                '950': colors.rose['50'],
                '900': colors.rose['100'],
                '800': colors.rose['200'],
                '700': colors.rose['300'],
                '600': colors.rose['400'],
                '500': colors.rose['500'],
                '400': colors.rose['600'],
                '300': colors.rose['700'],
                '200': colors.rose['800'],
                '100': colors.rose['900'],
                '50': colors.rose['950'],
                DEFAULT: colors.rose['500'],
            },
            gray: {
                '950': colors.gray['50'],
                '900': colors.gray['100'],
                '800': colors.gray['200'],
                '700': colors.gray['300'],
                '600': colors.gray['400'],
                '500': colors.gray['500'],
                '400': colors.gray['600'],
                '300': colors.gray['700'],
                '200': colors.gray['800'],
                '100': colors.gray['900'],
                '50': colors.gray['950'],
                DEFAULT: colors.gray['500'],
            }
        }
    }
}