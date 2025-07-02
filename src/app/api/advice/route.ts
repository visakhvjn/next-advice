import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function GET() {
	const adviceRes = await fetch('https://api.adviceslip.com/advice');
  	const adviceData = await adviceRes.json();
  	const advice = adviceData.slip.advice;

	console.log(advice);

	const prompt = `
		You are a helpful assistant that provides advice to users.
		You are given a piece of advice and you need to create an inspiring story around it.
		You need to use the advice to create a story that is interesting and engaging.
		You need to use the advice to create a story that is 100 words long.
		The advice is: ${advice}
	`;

  	const response = await openai.chat.completions.create({
		model: 'gpt-4o-mini',
		messages: [{ role: 'user', content: prompt }],
	});

	return NextResponse.json({
		advice,
		story: response.choices[0].message.content!,
	});
}