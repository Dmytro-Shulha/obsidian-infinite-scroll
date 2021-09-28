<style>
  .demo-widget {
    background: #f1f1f1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .demo-container {
    max-width: 800px;;
    width: 100%;
  }
  </style>
  
  <div class=demo-container>
    <Grid bind:items={items} rowHeight={100} let:item let:dataItem {cols}>
      <div class=demo-widget>{dataItem.id}</div>
    </Grid>
  </div>
  
  <script>
  import Grid from "svelte-grid";
  import gridHelp from "svelte-grid/build/helper/index.mjs";
  
  const id = () => "_" + Math.random().toString(36).substr(2, 9);
  
  let items = [
    {
      6: gridHelp.item({ 
        x: 0,
        y: 0,
        w: 2,
        h: 2,
      }),
      id: id(),
    },
  
    {
      6: gridHelp.item({
        x: 2,
        y: 0,
        w: 2,
        h: 2,
      }),
      id: id(),
    },
  ];
  
  const cols = [
    [ 1200, 6 ],
  ];
  </script>