import { ref, onMounted, onUnmounted } from 'vue'

export function useVisibility(threshold = 0.15) {
  const target = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    if (!target.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(target.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { target, isVisible }
}
