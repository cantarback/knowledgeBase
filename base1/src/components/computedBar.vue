<template>
    <div>
        <el-input v-model="model.keyword" :placeholder="model.placeholder"></el-input>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    modelValue: {
        type: Object,
        required: true
    }
})
const emit = defineEmits(['update:modelValue']);
const model = computed({
    get() {
        return new Proxy(props.modelValue, {
            set(obj, name, val) {
                console.log('emit', name, val);
                emit('update:modelValue', {
                    ...obj, [name]: val
                })
                return true
            }
        })
    },
    set(val) {
        emit('update:modelValue', val)
    }
})
</script>

<style scoped></style>