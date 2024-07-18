import { useQuery } from '@tanstack/react-query';

import { TaskServices } from '@/services/task.service';
import { TASKS } from '@/utils/constants';

export const useGetTaskList = () => {
	return useQuery({
		queryFn: TaskServices.getAll,
		queryKey: [TASKS.GET_ALL],
	});
};
