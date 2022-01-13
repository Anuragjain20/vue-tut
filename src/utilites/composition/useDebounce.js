import { ref } from 'vue';

export default function useDebounce() {

    const timeout = ref("")

    function debounce(func, wait) {
        clearTimeout(timeout.value)
        timeout.value = setTimeout(func, wait);
    }

    return debounce;
}