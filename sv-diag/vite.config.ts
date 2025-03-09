import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import dsv from '@rollup/plugin-dsv'
// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), dsv({
    processRow: (row: { [key: string]: string | number }, id) => {
      Object.keys(row).forEach((key) => {
        var value = row[key];
        row[key] = isNaN(+value) ? value : +value;
      });
    }
  })],
})
