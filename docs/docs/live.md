---
sidebar_position: 3
---

# live

## live=true by default

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
</script>

```

## live=false

```html vanilla live=false
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
</script>

```
