type Pack = {
    main: string,
    sub: string,
    extra: string,
    error: string,
    fore: string,
    back: string
}

const unpack = (pack: Pack)=>({theme:{colors:pack}});

export const minimalist = {
    superuser: unpack({
        back: '#262a33',
        sub: '#526777',
        extra: '#1acff6',
        error: '#ff5f5f',
        fore: '#e5f7ef',
        main: '#43ffaf',
    }),
    bold: unpack({
        back: '#0f0d0d',
        fore: '#ffffff',
        main: '#3d8e91',
        sub: '#f0624b',
        extra: '#f7a21b',
        error: '#f0624b',
    }),
    azure: unpack({
        back: '#181d26',
        fore: '#ffffff',
        main: '#508aaa',
        sub: '#64aeb3',
        extra: '#52708b',
        error: '#dd9dad',
    }),
    _default: unpack({
        back: '#',
        fore: '#',
        main: '#',
        sub: '#',
        extra: '#',
        error: '#',
    }),
}