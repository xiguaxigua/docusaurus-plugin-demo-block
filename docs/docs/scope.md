---
sidebar_position: 1
---

# scope

```html vanilla live=true
<html>
  <div id="box">box</div>
</html>

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
