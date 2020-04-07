export const mymix = {
    methods: {
        sayHello() {
            console.log("hello from the other side");
        }
    },
    data() {
        return {
            message: "data from the other side"
        }
    }
}

export const navBar = {
    created() {
        console.log("created from the other side");
    }
}