// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 重要：设置 base 路径
  base: '/GP/',  // 如果是用户页面（username.github.io），用 '/'
                 // 如果是项目页面（username.github.io/仓库名），用 '/仓库名/'
})
