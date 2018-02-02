<template>
    <div>
        <div><b>Programming language:</b> {{ language.name }}</div>
        <div><b>Lines:</b> {{ language.lines }}</div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "language-entry",
        props: {
            language: Object,
        },
    }
</script>
