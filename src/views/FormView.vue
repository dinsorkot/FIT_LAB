<script setup>
import bar from '../component/bar.vue';
import formdata from '../component/formdata.vue';
</script>
<template>
    <bar>
        <template #page>
            <formdata/>
        </template>
    </bar>
</template>