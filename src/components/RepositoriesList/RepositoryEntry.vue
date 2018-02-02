<template>
    <div>
        {{ repository.id }}:
        <router-link :to="{name: 'repository-languages', params: {repository: repository.name}}">
            {{ repository.name }}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'repository-entry',
        props: {
            repository: Object,
        },
    }
</script>

