
import React from 'react';
import Quest from '@/components/Quest';

const page = ({ params }: any) => {
	const { questid } = params;
	return <Quest slug={questid} />;
};

export default page;
