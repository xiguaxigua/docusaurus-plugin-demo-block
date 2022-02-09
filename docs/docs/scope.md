---
sidebar_position: 6
---

# scope

```html vanilla live=true
<template>
  <div id="box">box</div>
</template>

<style>
  #box {
    border: 1px solid red;
  }
</style>

<script>
const box = document.getElementById('box');
box.innerHTML = SCOPE_VARIABLE
</script>

```
