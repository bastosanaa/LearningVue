<template>
    <div class="contador">
        <h1>contador {{ contador }}</h1>
        <button @click="adicionar" >+</button>
        <button @click="diminuir">-</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        adicionar() {
            this.contador++
        },
        diminuir() {
            this.contador--
        }
    }
}
</script>

<style>

</style>