<script setup>
import bar from '../component/bar.vue';
import setting from '../component/setting.vue';
</script>
<template>
    <bar>
        <template #page>
            <setting/>
        </template>
    </bar>
</template>