import store from "./store";

import { bugAdded, bugRemoved } from "./actions";

store.subscribe(() => {
	console.log("Store changed", store.getState());
});

store.dispatch(bugAdded("Bug 2"));

store.dispatch(bugRemoved("bug2"));

console.log(store.getState());
