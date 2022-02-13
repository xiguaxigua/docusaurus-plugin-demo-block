---
sidebar_position: 11
---

# import

## vanilla

```html vanilla libGlobalName={react:{globalName:"React",link:"https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js"}}
<template>
  <div id="box">box</div>
</template>

<style>
  #box {
    border: 1px solid red;
  }
</style>

<script>
import React from 'react'
import { useEffect, useState } from 'react'

console.log(React, useEffect, useState);
const box = document.getElementById('box');
</script>
```


## vue

```html vue libGlobalName={react:{globalName:"React",link:"https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js"}}
<template>
  <div id="box">{{ foo }}</div>
</template>

<script>
import React from 'react'
import { useEffect, useState } from 'react'

console.log(React, useEffect, useState);
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

```jsx react libGlobalName={react:{globalName:"React",link:"https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js"}}
import React from 'react'
import { useEffect, useState } from 'react'

console.log(React, useEffect, useState);

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

