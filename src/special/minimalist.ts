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
    twilight: unpack({
        back: "#232136",
        fore: "#e0def4",
        main: "#b9bfca",
        sub: "#6e6a86",
        extra: "#988ba2",
        error: "#ff5370"
    }),
    retrowave: unpack({
        back: "#2b213a",
        fore: "#ffffff",
        main: "#ff7edb",
        sub: "#45a29e",
        extra: "#66fcf1",
        error: "#fc6677"
    }),
    zen: unpack({
        back: "#282c34",
        fore: "#abb2bf",
        main: "#98c379",
        sub: "#56b6c2",
        extra: "#c678dd",
        error: "#e06c75"
    }),
    pixel: unpack({
        back: "#1d1d1d",
        fore: "#ffffff",
        main: "#fc3a95",
        sub: "#19b2ff",
        extra: "#ffba4b",
        error: "#ff5555"
    }),
    sunset: unpack({
        back: "#343d46",
        fore: "#dfe1e8",
        main: "#ec6053",
        sub: "#f0c674",
        extra: "#6699cc",
        error: "#cc6666"
    }),
    neon: unpack({
        back: "#212121",
        fore: "#b4e7f8",
        main: "#4bf3ff",
        sub: "#edbfbf",
        extra: "#8ae1fc",
        error: "#ff89bd"
    }),
    mystic: unpack({
        back: "#2f2057",
        fore: "#edecee",
        main: "#506c90",
        sub: "#a5a38a",
        extra: "#947e9c",
        error: "#ff7b93"
    }),
    urban: unpack({
        back: "#47494e",
        fore: "#d9dbe0",
        main: "#ff4088",
        sub: "#3fdcee",
        extra: "#a9e34b",
        error: "#ff6347"
    }),
    oceanic: unpack({
        back: "#0f2027",
        fore: "#8fc9ff",
        main: "#3aa0d8",
        sub: "#66ffee",
        extra: "#ffee66",
        error: "#ff3333"
    }),
    sakura: unpack({
        back: "#feedf3",
        fore: "#5c5c61",
        main: "#f7aef8",
        sub: "#a1eafb",
        extra: "#f6c7b6",
        error: "#ff79b0"
    }),
    terra: unpack({
        back: "#262221",
        fore: "#e2c5b7",
        main: "#a25922",
        sub: "#856c57",
        extra: "#d9a775",
        error: "#e05252"
    }),
    vinyl: unpack({
        back: "#1e1e1e",
        fore: "#eeeeee",
        main: "#ffcd60",
        sub: "#bd93f9",
        extra: "#ff5555",
        error: "#ff79c6"
    }),
    cyber: unpack({
        back: "#17141f",
        fore: "#f3f3f3",
        main: "#00ffff",
        sub: "#ff00ff",
        extra: "#ff006e",
        error: "#ff5555"
    }),
    marble: unpack({
        back: "#eceae8",
        fore: "#5e5c64",
        main: "#b4ada3",
        sub: "#a09d96",
        extra: "#6e6865",
        error: "#d65f5f"
    }),
    solar: unpack({
        back: "#202020",
        fore: "#fdf6e3",
        main: "#b58900",
        sub: "#586e75",
        extra: "#93a1a1",
        error: "#dc322f"
    }),
    canopy: unpack({
        back: "#fdf6e3",
        fore: "#586e75",
        main: "#859900",
        sub: "#2aa198",
        extra: "#93a1a1",
        error: "#dc322f"
    }),
    dune: unpack({
        back: "#322d00",
        fore: "#e1d9a3",
        main: "#d9b775",
        sub: "#a88c56",
        extra: "#796857",
        error: "#ff6f6b"
    }),
    serenity: unpack({
        back: "#EAE7DC",
        fore: "#1F1F1F",
        main: "#8E9AAF",
        sub: "#B2B2B2",
        extra: "#C0C5C1",
        error: "#D33F49"
    }),
    oasis: unpack({
        back: "#FEF6EB",
        fore: "#2C3333",
        main: "#3E885B",
        sub: "#7C9A92",
        extra: "#A5C1AD",
        error: "#EF476F"
    }),
    eclipse: unpack({
        back: "#2B2D2F",
        fore: "#E5E5E5",
        main: "#5762D5",
        sub: "#706F6F",
        extra: "#8D8C8C",
        error: "#E84855"
    }),
    zenith: unpack({
        back: "#2A293E",
        fore: "#E0E1DD",
        main: "#00A6ED",
        sub: "#274472",
        extra: "#4D7EA8",
        error: "#FF5964"
    }),
    ember: unpack({
        back: "#2C1A1D",
        fore: "#F1EDEE",
        main: "#DD7631",
        sub: "#A64942",
        extra: "#FFB585",
        error: "#FF4242"
    }),
    verdant: unpack({
        back: "#F1F9F5",
        fore: "#334E36",
        main: "#659B5E",
        sub: "#A3BC9D",
        extra: "#CDE4C0",
        error: "#E63946"
    }),
    cosmos: unpack({
        back: "#1B1B2F",
        fore: "#E6E6E6",
        main: "#3D2C8D",
        sub: "#916BBF",
        extra: "#C996CC",
        error: "#EF767A"
    }),
    _template_: unpack({
        back: '#',
        fore: '#',
        main: '#',
        sub: '#',
        extra: '#',
        error: '#',
    }),
}