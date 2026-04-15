<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollToCta() {
  document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <a href="#" class="navbar-logo" @click.prevent="scrollToTop">
      Chess <span>Print</span>
    </a>
    <button class="navbar-cta" @click="scrollToCta">Guide gratuit</button>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 48px;
  background:transparent;
  backdrop-filter: blur(32px);
  transition: background 0.3s, box-shadow 0.3s;
}

.navbar.scrolled {
  background: rgba(250, 244, 244, 0.275);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 20px rgba(34, 30, 50, 0.06);
}

.navbar-logo {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  cursor: pointer;
  text-decoration: none;
  color: var(--navy);
}

.navbar-logo span {
  color: var(--purple);
  font-weight: 500;
}

.navbar-cta {
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 12px 28px;
  background: var(--button-bg);
  color: #fff;
  border: none;
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: transform 0.2s, background 0.2s;
}

.navbar-cta:hover {
  background: var(--navy);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .navbar { padding: 16px 24px; }
}
</style>
