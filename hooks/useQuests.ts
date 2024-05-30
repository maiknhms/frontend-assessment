// hooks/useQuests.ts
import { useQuery } from '@tanstack/react-query';
import { fetchQuest, fetchQuests } from '../api/quests';

export const useQuest = (id: string) => {
	return useQuery({
		queryKey: ['quest', id],
		queryFn: () => fetchQuest(id)
	});
};

export const useQuests = () => {
	return useQuery({
		queryKey: ['quests'],
		queryFn: fetchQuests
	});
};
