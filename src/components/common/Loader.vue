<template>
    <div>
        <div :class="hideOnLoad(!isLoading)">
            <slot></slot>
        </div>
        <div :class="'loader-wrapper' + hideOnLoad(isLoading)">
            <div class="loader-image"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loader",
        computed: {
            isLoading: function () {
                return this.$store.state.ajaxInProgress;
            },
        },
        methods: {
            hideOnLoad(isLoading) {
                return (isLoading ? '' : ' hidden');
            }
        }
    }
</script>
