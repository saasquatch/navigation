import {NavigateEvent, Navigation} from "../../spec/navigation";

export async function intercept(event: NavigateEvent, navigation: Navigation) {
    console.log("Test", { intercept: { event, navigation }});
}