export interface Task {
	uuid: string;
	title: string;
	is_completed: boolean;
	is_hidden: boolean;
	created_at: Date;
	updated_at: Date | null;
	deleted_at: Date | null;
}
