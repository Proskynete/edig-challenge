import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TaskServices } from '@/services/task.service';
import { Task } from '@/types/task.types';
import { TASKS } from '@/utils/constants';

export const useCreateTask = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: TaskServices.createNewTask,
		onMutate: async (newTask) => {
			await queryClient.cancelQueries({ queryKey: [TASKS.GET_ALL] });
			const previousTasks = queryClient.getQueryData([TASKS.GET_ALL]);
			queryClient.setQueryData([TASKS.GET_ALL], (old: Task[]) => [
				{ ...newTask, uuid: Math.random(), preview: true },
				...old,
			]);
			return { previousTasks };
		},
		onError: (error, variables, context) => {
			queryClient.setQueryData([TASKS.GET_ALL], context?.previousTasks);
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: [TASKS.GET_ALL] });
		},
	});
};
