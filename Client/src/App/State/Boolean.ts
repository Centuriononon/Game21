import { makeAutoObservable } from "mobx";

function createDoubler(state: boolean) {
    return makeAutoObservable({
        state,
        setState() {
            this.state = !this.state;
        },
    });
}

export default createDoubler;
