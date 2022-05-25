import { useState } from 'react';

import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
	BUG: {
		title: 'Problema',
		image: {
			source: bugImageUrl,
			alt: 'Imagem de um inseto'
		}
	},
	IDEA: {
		title: 'Idea',
		image: {
			source: ideaImageUrl,
			alt: 'Imagem de uma lâmpada'
		}
	},
	OTHER: {
		title: 'Outro',
		image: {
			source: thoughtImageUrl,
			alt: 'Imagem de uma nuvem de pensamento'
		}
	}
};

// sem o keyof retorna toda a estrutura do feedbackTypes e os tipos do elementos dentro do feedbackTypes ja com o keyof retorna apenas apenas as chaves do feedbackTypes
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
	const [feedbackSent, setFeedbackSent] = useState(false);

	function handleRestartFeedback() {
		setFeedbackSent(false);
		setFeedbackType(null);
	}

	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			{feedbackSent ? (
				<FeedbackTypeSuccessStep
					onFeedbackRestartRequested={handleRestartFeedback}
				/>
			) : (
				<>
					{!feedbackType ? (
						<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
					) : (
						<FeedbackContentStep
							feedbackType={feedbackType}
							onFeedbackRestartRequested={handleRestartFeedback}
							onFeedbackSent={() => setFeedbackSent(true)}
						/>
					)}
				</>
			)}

			<footer className="text-xs text-neutral-400">
				Feito com ♥ pela{' '}
				<a
					className="underline underline-offset-2"
					href="https://rocketseat.com.br"
					target="_blank"
				>
					Rocketseat
				</a>
			</footer>
		</div>
	);
}

/* 
  Object.entries(feedbackTypes) =>
 
  vai retornar um array com um array para cada objeto com a chave e o valor da para desestruturar com o .map como acima

  [
    ['BUG', {...}]
    ['IDEA', {...}]
    ['THOUGHT', {...}]
  ]

*/
