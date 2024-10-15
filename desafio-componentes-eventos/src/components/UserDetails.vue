<template>
  <div>
    <ul v-if="userSelected">
        <li><Strong>ID:</Strong> {{ userSelected.id }}</li>
        <li><Strong>Nome:</Strong> {{ userSelected.name }}</li>
        <li><Strong>Idade:</Strong> {{ userSelected.age }} anos</li>
    </ul>
  </div>
</template>

<script>
import { EventBus } from '@/eventBus.js';

export default {
    data() {
        return {
            userSelected: null
        }
    },
    mounted() {
        EventBus.$on('select-user', user => {
            console.log(user);
            
            this.userSelected = user
        })
    }
}
</script>

<style>
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        border: 1px solid palevioletred;
        border-radius: 15px;
        background-color: pink;
    }

</style>