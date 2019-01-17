import Typography from 'typography';

/*
 Documented at:
 https://github.com/KyleAMathews/typography.js

 The values below are the defaults.
*/

const typography = new Typography({
    title: 'Defaults',
    baseFontSize: '16px',
    baseLineHeight: 1.45,
    headerLineHeight: 1.1,
    scaleRatio: 2,
    googleFonts: [],
    headerFontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
    ],
    bodyFontFamily: ['georgia', 'serif'],
    headerColor: 'inherit',
    bodyColor: 'hsla(0,0%,0%,0.8)',
    headerWeight: 'bold',
    bodyWeight: 'normal',
    boldWeight: 'bold',
    includeNormalize: true,
    blockMarginBottom: 1
});

export default typography;
