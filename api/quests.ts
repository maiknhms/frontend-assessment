// api/quests.ts
import axios from 'axios';
interface Quest {
	id: string;
	name: string;
	description: string;
	// Add other relevant fields here
}

export const fetchQuest = async (id: string): Promise<Quest> => {
	const { data } = await axios.get(`/api/quest?questSlug=${id}`);
	return data;
};

export const fetchQuests = async (): Promise<Quest[]> => {
	const { data } = await axios.get('/api/quests');
	return data;
};
