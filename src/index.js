import store from "./store";

import { bugAdded, bugRemoved, bugResolved } from "./actions";

store.subscribe(() => {
	console.log("Store changed", store.getState());
});

store.dispatch(bugAdded("Bug 2"));

store.dispatch(bugResolved(1));

console.log(store.getState());
