import { useState } from 'react';
import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';

import { Loading } from '../Loading';

interface ScreenshotButtonProps {
	screenshot: string | null;
	onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
	screenshot,
	onScreenshotTook
}: ScreenshotButtonProps) {
	const [isTakeScreenshot, setIsTakeScreenshot] = useState(false);

	// para a função de tirar o screenshot yarn add html2canvas
	async function handleTakeScreenshot() {
		setIsTakeScreenshot(true);

		// o ! no final indica que nunca vai ser nulo ou seja nesse caso sempre vai ter a tag 'html'
		const canvas = await html2canvas(document.querySelector('html')!); // tira a foto da tela
		const base64image = canvas.toDataURL('image/png'); // converte para base64

		onScreenshotTook(base64image);
		setIsTakeScreenshot(false);
	}

	if (screenshot) {
		return (
			<button
				type="button"
				className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
				onClick={() => onScreenshotTook(null)}
				style={{
					backgroundImage: `url(${screenshot})`,
					backgroundPosition: 'right bottom', // remover depois
					backgroundSize: 100 // remover depois
				}}
			>
				<Trash weight="fill" />
			</button>
		);
	}

	return (
		<button
			type="button"
			onClick={handleTakeScreenshot}
			className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors duration-500 ease-linear"
		>
			{isTakeScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
		</button>
	);
}
