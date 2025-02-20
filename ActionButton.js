const ActionButton = {
    template: `
        <div class="button-wrapper">
            <button @click="changeText">{{ buttonText }}</button>
        </div>
    `,
    data() {
        return {
            buttonText: 'Click to Change Hero Title'
        };
    }, 
    methods: {
        changeText() {
            this.$emit('update-hero-title', 'New Hero Title');
        }
    }
};
