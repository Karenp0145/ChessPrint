import { ref } from 'vue'

const pendingEmail = ref('')
const focusRequestId = ref(0)

export function useLeadForm() {
  function redirectToCta(email) {
    pendingEmail.value = email
    focusRequestId.value += 1
    const target = document.getElementById('cta')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return { pendingEmail, focusRequestId, redirectToCta }
}
