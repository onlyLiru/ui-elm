// vite.config.ts
import { defineConfig } from "file:///Users/tony/workspace/package/ui-elm/node_modules/vite/dist/node/index.js";
import react from "file:///Users/tony/workspace/package/ui-elm/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///Users/tony/workspace/package/ui-elm/node_modules/vite-plugin-dts/dist/index.mjs";
import alias from "file:///Users/tony/workspace/package/ui-elm/node_modules/@rollup/plugin-alias/dist/es/index.js";
import viteCompression from "file:///Users/tony/workspace/package/ui-elm/node_modules/vite-plugin-compression/dist/index.mjs";
import createImportPlugin from "file:///Users/tony/workspace/package/ui-elm/node_modules/vite-plugin-import/lib/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["styled-components", "@emotion/babel-plugin"]
      }
    }),
    dts({
      // tsconfigPath: 'tsconfig.app.json',
      entryRoot: "src",
      outDir: "dist",
      insertTypesEntry: true
    }),
    viteCompression(),
    alias({
      entries: [
        { find: "@", replacement: "/src" },
        { find: "@components", replacement: "/src/components" }
      ]
    }),
    createImportPlugin([
      {
        libraryName: "antd",
        "style": true
        // or 'css'
      }
    ])
  ],
  resolve: {
    alias: [
      { find: /^~/, replacement: "" }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        devSourcemap: true
      }
    }
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "UiElm",
      formats: ["es", "umd"],
      fileName: (format) => `eui.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@alife/cook-design-icons": "@alife/cook-design-icons"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdG9ueS93b3Jrc3BhY2UvcGFja2FnZS91aS1lbG1cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy90b255L3dvcmtzcGFjZS9wYWNrYWdlL3VpLWVsbS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdG9ueS93b3Jrc3BhY2UvcGFja2FnZS91aS1lbG0vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgYWxpYXMgZnJvbSAnQHJvbGx1cC9wbHVnaW4tYWxpYXMnO1xuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbic7XG5pbXBvcnQgY3JlYXRlSW1wb3J0UGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWltcG9ydCc7XG5cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAgICBiYWJlbDoge1xuICAgICAgICBwbHVnaW5zOiBbJ3N0eWxlZC1jb21wb25lbnRzJywgJ0BlbW90aW9uL2JhYmVsLXBsdWdpbiddLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBkdHMoe1xuICAgICAgLy8gdHNjb25maWdQYXRoOiAndHNjb25maWcuYXBwLmpzb24nLFxuICAgICAgZW50cnlSb290OiAnc3JjJyxcbiAgICAgIG91dERpcjogJ2Rpc3QnLFxuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcbiAgICB9KSxcbiAgICB2aXRlQ29tcHJlc3Npb24oKSxcbiAgICBhbGlhcyh7XG4gICAgICBlbnRyaWVzOiBbXG4gICAgICAgIHsgZmluZDogJ0AnLCByZXBsYWNlbWVudDogJy9zcmMnIH0sXG4gICAgICAgIHsgZmluZDogJ0Bjb21wb25lbnRzJywgcmVwbGFjZW1lbnQ6ICcvc3JjL2NvbXBvbmVudHMnIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICAgIGNyZWF0ZUltcG9ydFBsdWdpbihbXG4gICAgICB7XG4gICAgICAgIGxpYnJhcnlOYW1lOiAnYW50ZCcsXG4gICAgICAgICdzdHlsZSc6IHRydWUsICAgLy8gb3IgJ2NzcydcbiAgICAgIH1cbiAgICBdKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7IGZpbmQ6IC9efi8sIHJlcGxhY2VtZW50OiBcIlwiIH0sXG4gICAgXSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgbGVzczoge1xuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgZGV2U291cmNlbWFwOiB0cnVlXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiAnc3JjL2luZGV4LnRzJyxcbiAgICAgIG5hbWU6ICdVaUVsbScsXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCddLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBldWkuJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgICAnQGFsaWZlL2Nvb2stZGVzaWduLWljb25zJzogJ0BhbGlmZS9jb29rLWRlc2lnbi1pY29ucycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFIsU0FBUyxvQkFBb0I7QUFDM1QsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyx3QkFBd0I7QUFJL0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osT0FBTztBQUFBLFFBQ0wsU0FBUyxDQUFDLHFCQUFxQix1QkFBdUI7QUFBQSxNQUN4RDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBO0FBQUEsTUFFRixXQUFXO0FBQUEsTUFDWCxRQUFRO0FBQUEsTUFDUixrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsSUFDRCxnQkFBZ0I7QUFBQSxJQUNoQixNQUFNO0FBQUEsTUFDSixTQUFTO0FBQUEsUUFDUCxFQUFFLE1BQU0sS0FBSyxhQUFhLE9BQU87QUFBQSxRQUNqQyxFQUFFLE1BQU0sZUFBZSxhQUFhLGtCQUFrQjtBQUFBLE1BQ3hEO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxtQkFBbUI7QUFBQSxNQUNqQjtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsU0FBUztBQUFBO0FBQUEsTUFDWDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEVBQUUsTUFBTSxNQUFNLGFBQWEsR0FBRztBQUFBLElBQ2hDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osbUJBQW1CO0FBQUEsUUFDbkIsY0FBYztBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxPQUFPLE1BQU07QUFBQSxJQUNyQztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLDRCQUE0QjtBQUFBLFFBQzlCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
