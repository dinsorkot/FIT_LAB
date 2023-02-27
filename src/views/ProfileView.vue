<script setup>
import bar from '../component/bar.vue';
import profile from '../component/profile.vue';
</script>
<template>
    <bar>
        <template #page>
            <profile/>
        </template>
    </bar>
</template>