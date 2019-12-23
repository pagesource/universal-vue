<template>
  <button
    class="button"
    :class="variant"
    @click="$emit('click')"
  >
    <slot>Button</slot>
  </button>
</template>
<script>
  export default {
    name: 'Button',
    props: {
    variant: {
      type: String,
      default: 'default',
    }
  }
  }
</script>
<style scoped>
  .button {
    width: 150px;
    height: 50px;
  }
  .dafault {
    background-color:white;
  }
  .rounded{
    border-radius: 50px;
    background-color: lightcyan;
  }
  .disabled{
     background-color:lightgray;
  }
</style>
