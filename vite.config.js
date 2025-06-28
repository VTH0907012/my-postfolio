import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  //add
  base: "/my-postfolio/"
})


// vite.config.js
// export default defineConfig({
//   base: '/my-postfolio/', // tên repo
//   build: {
//     outDir: 'docs',
//   },
// });