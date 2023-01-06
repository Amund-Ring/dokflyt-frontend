<template>
  <div>
    <select >

      <option v-for="option in options" :value="option">{{ option }}</option>
    </select>
  </div>
</template>


<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'DropdownMenu',
    props: {
      options: {
        type: Array as any,
        required: true
      }
    }
  });
</script>