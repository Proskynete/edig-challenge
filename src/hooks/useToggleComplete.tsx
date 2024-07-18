import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TaskServices } from '@/services/task.service';
import { Task } from '@/types/task.types';
import { TASKS } from '@/utils/constants';

export const useToggleComplete = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: TaskServices.editTask,
		onMutate: async (newTask) => {
			await queryClient.cancelQueries({ queryKey: [TASKS.GET_ALL] });
			const previousTasks = queryClient.getQueryData([TASKS.GET_ALL]);
			queryClient.setQueryData([TASKS.GET_ALL], (old: Task[]) =>
				old.map((task) => (task.uuid === newTask.uuid ? { ...task, ...newTask } : task)),
			);
			return { previousTasks };
		},
		onError: (_error, _variables, context) => {
			queryClient.setQueryData([TASKS.GET_ALL], context?.previousTasks);
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: [TASKS.GET_ALL] });
		},
	});
};
