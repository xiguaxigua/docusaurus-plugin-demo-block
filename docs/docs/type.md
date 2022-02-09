---
sidebar_position: 4
---

# type

## vanilla

```html vanilla
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

## vue

```html vue
<template>
  <div id="box">{{ foo }}</div>
</template>

<script>
  export default {
    data() {
      return {
        foo: "foo"
      }
    },
    created () {
      console.log('created')
    }
  }
</script>

<style>
  #box {
    border: 1px solid red;
  }
</style>
```

## react

```jsx react
export function App () {
  useEffect(() => {
    console.log('mounted')
  }, [])
  return (
    <div id="box">123</div>
  )
}

export const style = `
  #box {
    border: 1px solid red;
  }
`
```
