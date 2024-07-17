export interface Task {
	uuid: string;
	title: string;
	is_completed: boolean;
	created_at: string;
	updated_at: string | null;
	deleted_at: string | null;
}
