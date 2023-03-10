<template>
  <div class="flex h-full min-h-screen w-screen flex-col items-center bg-blue-200 py-32">
    <div class="w-9/12 overflow-hidden rounded-lg border-2 border-slate-400">
      <div class="flex h-28 w-full gap-x-4 border-b-2 border-slate-300 bg-blue-50 p-8">
        <!-- Search box -->
        <input
          type="text"
          v-model="search"
          placeholder="🔎   Search"
          class="rounded-lg border-2 border-slate-300 px-3 text-center text-sm outline-none focus:border-blue-300 focus:ring-blue-100"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='🔎   Search name'"
        />

        <!-- Dropdown menu for races -->
        <div class="h-full grow">
          <select
            v-model="selectedRace"
            class="h-full w-full cursor-pointer rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-blue-300 focus:ring-blue-100"
          >
            <option value selected>Select race</option>
            <option v-for="option in raceOptions">
              {{ option }}
            </option>
          </select>
        </div>

        <!-- Dropdown menu for classes -->
        <div class="h-full grow">
          <select
            v-model="selectedClass"
            class="h-full w-full cursor-pointer rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-blue-300 focus:ring-blue-100"
          >
            <option value selected>Select class</option>
            <option v-for="option in classOptions">
              {{ option }}
            </option>
          </select>
        </div>

        <!-- Reset button -->
        <div
          @click="resetSelection"
          class="flex aspect-square h-full cursor-pointer items-center justify-center rounded-lg border-2 border-slate-300 bg-slate-50 hover:bg-red-200"
        >
          <v-icon name="bi-x" scale="1.4"></v-icon>
        </div>
      </div>

      <CharacterTable :characters="filteredCharacters" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import CharacterTable from './components/CharacterTable.vue';
  import characterData from './data/characterData.json';

  interface Character {
    name: string;
    race: string;
    className: string;
    level: number;
    createdAt: string;
  }

  export default defineComponent({
    name: 'App',
    components: {
      CharacterTable,
    },
    data() {
      return {
        characters: characterData,
        search: '',
        selectedRace: '',
        selectedClass: ''
      };
    },
    methods: {
      resetSelection() {
        this.search = '';
        this.selectedRace = '';
        this.selectedClass = '';
      }
    },
    computed: {
      filteredCharacters(): Array<Character> {
        let filteredChars = this.characters;

        if (this.selectedRace) {
          filteredChars = filteredChars.filter(char => char.race === this.selectedRace);
        }

        if (this.selectedClass) {
          filteredChars = filteredChars.filter(
            char => char.className === this.selectedClass
          );
        }

        if (this.search) {
          return filteredChars.filter(char =>
            char.name.toLowerCase().includes(this.search.toLowerCase())
          );
        }

        return filteredChars;
      },
      raceOptions(): string[] {
        const races: string[] = [];
        this.characters.forEach(character => {
          races.push(character.race);
        });
        const racesWithoutDuplicates = [...new Set(races)];
        return racesWithoutDuplicates.sort();
      },
      classOptions(): string[] {
        const classes: string[] = [];
        this.characters.forEach(character => {
          classes.push(character.className);
        });
        const classesWithoutDuplicates = [...new Set(classes)];
        return classesWithoutDuplicates.sort();
      }
    }
  });
</script>
