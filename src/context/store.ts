import { SortDirection } from 'generated/graphql';

export function createStore() {
	return {
		isInitialized: false,
		isDrawerOpen: false,

		tasksSortOrder: SortDirection.Desc as SortDirection,
		tasksSearchKey: '',

		setInitialize() {
			this.isInitialized = true;
		},

		toggleDrawer(val?: boolean) {
			this.isDrawerOpen = typeof val === 'boolean' ? val : !this.isDrawerOpen;
		},

		toggleTasksSortOrder() {
			this.tasksSortOrder =
				this.tasksSortOrder === SortDirection.Asc
					? SortDirection.Desc
					: SortDirection.Asc;
		},

		setTasksSearchKey(q = '') {
			this.tasksSearchKey = q;
		},
	};
}

export type TStore = ReturnType<typeof createStore>;
