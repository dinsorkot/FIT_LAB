<script setup>
import bar from '../component/bar.vue';
import home from '../component/home.vue';
</script>
<template>
    <bar>
        <template #page>
            <home/>
        </template>
    </bar>
</template>