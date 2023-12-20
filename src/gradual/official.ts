import colors from 'tailwindcss/colors';

export const official = {
        colors: {
            primary: {
                ...colors.indigo,
                DEFAULT: colors.indigo['500'],
            },
            secondary: {
                ...colors.blue,
                DEFAULT: colors.blue['500'],
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