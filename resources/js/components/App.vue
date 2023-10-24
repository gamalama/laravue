<template>
    <div>
        <main class="py-4">
            <Navigation/>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import Navigation from "./Navigation";

export default {
    components: {
        Navigation
    }
}
</script>
