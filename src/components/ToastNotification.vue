<script setup>
import { useToast } from '../composables/useToast'
const { isVisible, message } = useToast()
</script>

<template>
  <Transition name="toast">
    <div v-if="isVisible" class="toast">{{ message }}</div>
  </Transition>
</template>

<style scoped>
.toast {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--navy);
  color: #fff;
  padding: 16px 32px;
  border-radius: 4px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  z-index: 200;
  box-shadow: 0 8px 32px rgba(30, 26, 46, 0.25);
  white-space: nowrap;
}

.toast-enter-active,
.toast-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
}

.toast-enter-from,
.toast-leave-to {
  transform: translateX(-50%) translateY(100px);
  opacity: 0;
}
</style>
