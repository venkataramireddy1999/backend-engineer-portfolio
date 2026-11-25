/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html','./src/**/*.{js,jsx}'], theme: { extend: { fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'], mono:['JetBrains Mono','ui-monospace','monospace'] }, colors: { ink:'#080e1a', panel:'#101b2c', cyan:'#6fe7e0', muted:'#9aa9c1' } } }, plugins: [] };
