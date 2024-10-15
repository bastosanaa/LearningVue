<template>
  <div>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id" :class="{selected: selectedUser === user}" @click="selectUser(user)">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { EventBus } from '@/eventBus';
import { users } from '@/mock/users'
export default {
    data() {
        return {
            users: users,
            selectedUser: null
        }
    },
    methods: {
        selectUser(user) {
            this.selectedUser = user
            EventBus.$emit('select-user', user)
        }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    #app {
        font-family: "Roboto", sans-serif;
    }
    table, th, td {
        border: 1px solid palevioletred;
        border-collapse: collapse; /* Para colapsar as bordas */
    }
    th {
        background-color: pink;
    }
    th, td {
        padding: 10px;
        
    }
    tr {
        cursor: pointer;
    }
    .selected {
        background-color: pink;
    }
</style>