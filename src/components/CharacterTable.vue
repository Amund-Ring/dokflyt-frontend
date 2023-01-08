<template>
  <div class="w-full bg-white">
    <!-- <div>Sorting by: {{ sortBy }}</div> -->
    <!-- <HiSelector /> -->
    <!-- <v-icon name="HiSelector" /> -->

    <table class="min-w-full">
      <thead>
        <tr>
          <th
            @click="setSort('name')"
            class="cursor-pointer select-none border-b-2 border-slate-300 py-5 px-5 text-left font-bold text-slate-800"
          >
            Name
            <SortIcon
              :categoryName="'name'"
              :sortBy="sortBy"
              :sortDirection="sortDirection"
            />
          </th>
          <th
            @click="setSort('race')"
            class="cursor-pointer select-none border-b-2 border-slate-300 py-5 px-5 text-left font-bold text-slate-800"
          >
            Race
            <SortIcon
              :categoryName="'race'"
              :sortBy="sortBy"
              :sortDirection="sortDirection"
            />
          </th>
          <th
            @click="setSort('className')"
            class="cursor-pointer select-none border-b-2 border-slate-300 py-5 px-5 text-left font-bold text-slate-800"
          >
            Class
            <SortIcon
              :categoryName="'className'"
              :sortBy="sortBy"
              :sortDirection="sortDirection"
            />
          </th>
          <th
            @click="setSort('level')"
            class="cursor-pointer select-none border-b-2 border-slate-300 py-5 px-5 pr-8 text-center font-bold text-slate-800"
          >
            Level
            <SortIcon
              :categoryName="'level'"
              :sortBy="sortBy"
              :sortDirection="sortDirection"
            />
          </th>
          <th
            @click="setSort('createdAt')"
            class="cursor-pointer select-none border-b-2 border-slate-300 py-5 px-5 text-left font-bold text-slate-800"
          >
            Created At
            <SortIcon
              :categoryName="'createdAt'"
              :sortBy="sortBy"
              :sortDirection="sortDirection"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="character in sortedCharacters"
          :key="character.name"
          class="even:bg-slate-100"
        >
          <td class="border-b py-4 px-5 text-left">{{ character.name }}</td>
          <td class="border-b py-4 px-5 text-left">{{ character.race }}</td>
          <td class="border-b py-4 px-5 text-left">{{ character.className }}</td>
          <td class="border-b py-4 px-5 pr-8 text-center">{{ character.level }}</td>
          <td class="border-b py-4 px-5 text-left">{{ character.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SortIcon from './SortIcon.vue';

  interface Character {
    name: string;
    race: string;
    className: string;
    level: number;
    createdAt: string;
  }

  export default defineComponent({
    name: 'CharacterTable',
    components: {
      SortIcon
    },
    data() {
      return {
        sortBy: 'createdAt',
        sortDirection: 'descending'
      };
    },
    props: {
      characters: {
        type: Array<Character>,
        required: true
      }
    },
    methods: {
      setSort(categoryName: string) {
        if (categoryName === this.sortBy) {
          this.sortDirection =
            this.sortDirection === 'ascending' ? 'descending' : 'ascending';
        } else {
          this.sortBy = categoryName;
          this.sortDirection = 'ascending'
        }
      }
    },
    computed: {
      sortedCharacters() {
        const sorted = this.characters.sort((a: Character, b: Character) =>
          // @ts-ignore
          a[this.sortBy] > b[this.sortBy] ? 1 : a[this.sortBy] < b[this.sortBy] ? -1 : 0
        );

        if (this.sortDirection === 'ascending') {
          return sorted;
        }

        return [...sorted].reverse();
      }
    }
  });
</script>
