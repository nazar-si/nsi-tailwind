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
    taro: unpack({
        back: '#D1C4E9',
        fore: '#311B92',
        main: '#9575CD',
        sub: '#673AB7',
        extra: '#5E35B1',
        error: '#F44336' 
    }),
    vscode: unpack({
        back: '#1E1E1E',
        fore: '#D4D4D4',
        main: '#569CD6',
        sub: '#9CDCFE',
        extra: '#D7BA7D',
        error: '#F48771',
    }),
    matrix: unpack({
        back: '#0C0C0C',
        fore: '#33FF33',
        main: '#99FF99',
        sub: '#66FF66',
        extra: '#00FF00',
        error: '#FF3333' 
    }),
    dualshot: unpack({
        back: '#262626',
        fore: '#F5F5F5',
        main: '#60A5FA',
        sub: '#34D399',
        extra: '#F97316',
        error: '#EF4444' 
    }),
    cyberspace: unpack({
        back: '#000B1E',
        fore: '#A9B7C6',
        main: '#FFCB6B',
        sub: '#82AAFF',
        extra: '#C792EA',
        error: '#FF5370' 
    }),
    bento: unpack({
        back: '#2A2734',
        fore: '#EEEBE3',
        main: '#FAC863',
        sub: '#C594C5',
        extra: '#5FB3B3',
        error: '#EC5f67' 
    }),
    orwell: unpack({
        back: '#1A1A1A',
        fore: '#F5F5F5',
        main: '#D8D8D8',
        sub: '#E74C3C',
        extra: '#969696',
        error: '#E74C3C' 
    }),
    royal: unpack({
        back: '#100E23',
        fore: '#D8DDE8',
        main: '#EE64AC',
        sub: '#A37ACC',
        extra: '#5D89F4',
        error: '#FF6479' 
    }),
    pine: unpack({
        back: '#011627',
        fore: '#D6DEEB',
        main: '#82AAFF',
        sub: '#22DA6E',
        extra: '#FF5874',
        error: '#FF5874' 
    }),
    alien: unpack({
        back: '#132738',
        fore: '#CDD2E9',
        main: '#10A778',
        sub: '#6FC2EF',
        extra: '#FFC777',
        error: '#F25C54' 
    }),
    anarchy: unpack({
        back: '#282A36',
        fore: '#F8F8F2',
        main: '#FF5555',
        sub: '#FF79C6',
        extra: '#8BE9FD',
        error: '#FF5555' 
    }),
    alpine: unpack({
        back: '#2E3440',
        fore: '#D8DEE9',
        main: '#88C0D0',
        sub: '#81A1C1',
        extra: '#5E81AC',
        error: '#BF616A' 
    }),
    carbon: unpack({
        back: '#14191F',
        fore: '#D9D7CE',
        main: '#FF6059',
        sub: '#FEB144',
        extra: '#1BC98E',
        error: '#FF6059' 
    }),
    halloween: unpack({
        back: '#282828',
        fore: '#EBDBB2',
        main: '#FB4934',
        sub: '#B8BB26',
        extra: '#83A598',
        error: '#FB4934' 
    }),
    cyberpunk: unpack({
        back: '#fff25e',
        fore: '#000000',
        main: '#ff7a9b',
        sub: '#00e2f4',
        extra: '#cb7aff',
        error: '#FF4081' 
    }),
    synthwave: unpack({
        back: '#2b213a',
        fore: '#f92aad',
        main: '#fd25e9',
        sub: '#03edf9',
        extra: '#f4eee4',
        error: '#f92aad' 
    }),    
    abyss: unpack({
        back: '#22092C',
        fore: '#efc4d8',
        main: '#F05941',
        sub: '#BE3144',
        extra: '#872341',
        error: '#8c444f',
    }),
    breeze: unpack({
        back: '#ECF4D6',
        fore: '#265073',
        main: '#2D9596',
        sub: '#9AD0C2',
        extra: '#64CCC5',
        error: '#176B87',
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