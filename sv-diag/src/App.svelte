<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Diagram from "./lib/Diagram.svelte";
  import { sankey } from "d3-sankey";

  import {default as names } from "./assets/names.csv";
  import links from "./assets/links.csv";
  import order from "./assets/order.csv";
  let years = [2021, 2025]

  let links1 = links.map((e) => ({year: 2025, ...e}))
  interface Party {
    name: string;
    color: string;
    short: string;
    year: number;
  }
  const initial: [Party[], typeof names] = [[], names]


  links1.reduce(([parties, otherNames], curr) => {
    
  }, initial)

  names

  /*
  let san = sankey();
  san.extent
  san.nodeId(d => d.id);
  san.nodes(nodes);
  san.links(links);
  let g = san()

  console.log(g);
*/
</script>

<main style="display: flex; flex-direction: column;">
  <div class="card" style="width: 500px; height: 500px;">
    <Diagram nodes={nodes} links={links} />
  </div>
</main>

<style>

</style>
