<script setup>
import bar from '../component/bar.vue';
import dashboard from '../component/dashboard.vue';
</script>
<template>
    <bar>
        <template #page>
            <dashboard/>
        </template>
    </bar>
</template>