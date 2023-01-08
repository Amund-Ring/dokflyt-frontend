
<template>
   <v-icon :name="iconName" scale="1.1" class="ml-1 " :class="iconColor"></v-icon>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SortIcon',
    props: {
      categoryName: String,
      sortBy: String,
      sortDirection: String
    },
    computed: {
      iconName(): String {
        if (this.categoryName !== this.sortBy) {
          return 'hi-selector'
        }

        return this.sortDirection == 'ascending' ? 'bi-chevron-up' : 'bi-chevron-down';


      },
      iconColor(): String {
        if (this.categoryName === this.sortBy) {
          return 'text-green-600'
        }

        return 'text-slate-400'
      }
    }
  });
</script>