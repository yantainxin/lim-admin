<template>
  <label>
  <template v-for="option in options">
    <template v-if="option[props.value] == value">{{option[props.label]}}</template>
  </template>
  </label>
</template>
<script>
export default{
  props: {
    options:Array,
    props: {
      type: Object,
      default() {
        return {
          label: 'label',
          value: 'value'
        };
      }
    },
    value: {}
  }
}	
</script>