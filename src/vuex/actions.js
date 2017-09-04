// export const addTabs(state, obj) {
// 	let result = false;
// 	state.tabItems.forEach((tab, index) => {
// 		if(obj.columnId === tab.columnId){
// 			result = true;
// 		}
// 	});

// 	if(result == false){
// 		state.tabItems.push(obj);
// 	}
// 	state.tabActive = obj.columnId.toString();

//   window.sessionStorage.setItem('tabItems', state.tabItems);
//   window.sessionStorage.setItem('tabActive', state.tabActive);
// },