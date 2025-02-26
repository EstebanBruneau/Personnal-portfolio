const ErrorBoundary = {
    template: `
        <div v-if="error" class="error-boundary">
            <h2>Something went wrong</h2>
            <p>{{ error }}</p>
            <button @click="resetError">Try again</button>
        </div>
        <slot v-else></slot>
    `,
    data() {
        return {
            error: null
        };
    },
    methods: {
        resetError() {
            this.error = null;
        }
    },
    errorCaptured(err, vm, info) {
        this.error = `${err.message} (${info})`;
        return false;
    }
};

// Register the error boundary component globally
app.component('error-boundary', ErrorBoundary);
