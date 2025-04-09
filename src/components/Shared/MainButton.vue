<template>
  <button
    :type="type"
    class="btn w-[95%] h-[50px] py-2 rounded-full font-semibold"
    :style="defaultStyle"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
});

const defaultStyle = {
  backgroundColor: '#B54CE9',
  color: 'white',
};
</script>
