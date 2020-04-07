<template>
<div>
  <p>{{title}}</p>
 <div class="">
  <slot name="content"></slot>
  </div>
  <div class="">
  <slot name="footer"></slot>
  </div>
</div>
</template>

<script>
export default {
  props:['title']
}
</script>

<style>

</style>