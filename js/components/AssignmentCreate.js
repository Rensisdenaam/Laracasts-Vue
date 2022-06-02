export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 bg-white text-black flex">
                <input v-model="newAssignment" placeholder="New assignment..." class="p-2 w-full">
                <button type="submit" class="p-2 border-l bg-gray-100 hover:bg-gray-200">add</button>
             </div>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {

            this.$emit('add', this.newAssignment);


            this.newAssignment = '';

        }
    }
}