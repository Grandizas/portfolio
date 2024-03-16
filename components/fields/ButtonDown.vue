<template>
	<div class="button-page-down__wrapper">
    <button
    	class="button-page-down"
    	type="button"
    	:disabled="state.isButtonDisabled"
    	@click="applyAnimation($event); emit('click')"
    >
      <i class="fi fi-rr-chevron-double-down" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useIndexStore } from '~/stores/index';

const state = reactive({
	isButtonDisabled: false,
});

const $basket = useIndexStore();

// @ts-ignore
const emit = defineEmits<{
	'click': [],
}>();

function applyAnimation(e: Event) {
	if (!e || !e.target) return;

	const target = e.target as HTMLElement;
	target.classList.add('move-down-animation');
	state.isButtonDisabled = true;

	setTimeout(() => {
		target.classList.remove('move-down-animation');
		state.isButtonDisabled = false;
	}, $basket.timeoutForPageScroll);
}
</script>
