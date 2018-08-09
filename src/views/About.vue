<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ol>
      <li
        class="item"
        v-for="todo in todos"
        v-bind:key = "todo.id"
        v-on:click="isAciveItem = !isAciveItem"
        v-bind:class="{ 'item--active': isAciveItem }"
      >{{ todo.text }}</li>
    </ol>
  </div>
</template>

<script lang="ts">
'use strict';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      isAciveItem: false,
      todos: [
        { text: 'Изучить JavaScript' },
        { text: 'Изучить Vue' },
        { text: 'Создать что-нибудь классное' },
      ],
    };
  },
})
export default class Todo extends Vue {}
</script>

<style scoped lang="scss">
.item {
  color: green;
  &--active {
    color: red;
  }
}
</style>
