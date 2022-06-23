export default {
    methods: {
        showToast(variant, title, description) {
            this.$root.$bvToast.toast(description, {
                title: title,
                toaster: 'b-toaster-top-center',
                variant: variant,
                solid: true,
                autoHideDelay: 2000
            })
        }
    }
}