---
sidebar_position: 8
---

# babel

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

## vanilla & babel=false

```html vanilla babel=false
<template>
  <div id="box">box</div>
</template>

<style>
  #box {
    border: 1px solid red;
  }
</style>

<script>
var box = document.getElementById('box');
</script>

```

## vue

```html vue
<template>
  <div id="box">{{ foo }}</div>
</template>

<script>
export default {
  data: () => ({
    foo: 1
  }),
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

## vue & babel=false

```html vue babel=false
<template>
  <div id="box">{{ foo }}</div>
</template>

<script>
export default {
  data: function () {
    return {
      foo: "foo"
    }
  },
  created: function () {
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
function App () {
  React.useEffect(() => {
    console.log('mounted')
  }, [])
  return (
    <div id="box">123</div>
  )
}

document.head.innerHTML += `
<style>
  #box {
    border: 1px solid red;
  }
</style>
`

ReactDOM.render(<App />, CONTAINER);
```

## react & babel=false

```jsx react babel=false
function App () {
  React.useEffect(function () {
    console.log('mounted')
  }, [])
  return React.createElement('div', {
    id: 'box'
  }, 123)
}

document.head.innerHTML += `
<style>
  #box {
    border: 1px solid red;
  }
</style>
`

ReactDOM.render(React.createElement(App, null), CONTAINER);
```
