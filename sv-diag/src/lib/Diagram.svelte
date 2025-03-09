<script lang="ts">
  import { sankey, type SankeyGraph } from "d3-sankey";

  let { nodes, links } = $props();
  let width: any = $state();
  let height: any = $state();
  let graph: SankeyGraph<{}, {}> | undefined = $state();

  
  let customNodes: any = $state();

  $effect(() => {
    if (!width || !height) return;
    let san = sankey();
    san.size([width, height]);
    san.nodeId((d: any) => d.id);

    let g = san({
      nodes: nodes.map((d: any) => Object.assign({}, d)),
      links: links.map((d: any) => Object.assign({}, d)),
    });

    graph = g;
    customNodes = undefined;
  });

  $effect(() => {
    console.log(width);
    console.log(height);
  });

  let sen = sankey();

  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
</script>

<svg bind:clientWidth={width} bind:clientHeight={height}>
  {#if graph}
    <g>
      {#each graph.nodes as n}
      <rect stroke="black" x={n.x0} y={n.y0} height={n.y1! - n.y0!} width={n.x1! - n.x0!} fill="black"/>
      {/each}
    </g>
  {/if}
</svg>
{#if graph}
  <p>hello</p>
{:else}
  <p>bye</p>
{/if}

<style>
  svg {
    border: 1px solid black;
    width: 100%;
    height: 100%;
  }
</style>
