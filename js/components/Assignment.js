export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center hover:bg-gray-700">
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.completed" class="ml-3">
            </label>
        </li>
    `,

    props: {
        assignment: Object
    }
}