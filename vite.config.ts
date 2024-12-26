import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import metaMapPlugin from "vite-plugin-react-meta-map";

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      react(),
      metaMapPlugin({
         pageMetaMapFilePath: "./src/libs/utils/pageMetaMap.ts",
         pageTemplateFilePath: "./src/components/utils/PageTemplate.tsx",
      }),
   ],
});
