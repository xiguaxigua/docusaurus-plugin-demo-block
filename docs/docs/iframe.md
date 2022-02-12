---
sidebar_position: 9
---

# iframe

## vanilla & iframe=false

```html vanilla iframe=false
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

## vanilla & iframe=false&layout=column-reverse

```html vanilla iframe=false&layout="column-reverse"
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

## vue & iframe=false

```html vue iframe=false
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

## react & iframe=false

```jsx react iframe=false
function App () {
  React.useEffect(() => {
    console.log('mounted')
  }, [])
  return (
    <div id="box">123</div>
  )
}

CONTAINER.innerHTML += `
<style>
  #box {
    border: 1px solid red;
  }
</style>
`

ReactDOM.render(<App />, CONTAINER);
```
