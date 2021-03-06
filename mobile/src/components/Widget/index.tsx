import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Form } from '../Form';
import { Options } from '../Options';
import { Success } from '../Success';

import { feedbackTypes } from '../../utils/feedbackTypes';

import { theme } from '../../theme';
import { styles } from './styles';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
	const [feedbackSent, setFeedbackSent] = useState(false);

	const bottomSheetRef = useRef<BottomSheet>(null);

	function handleOpen() {
		bottomSheetRef.current?.expand();
	}

	function handleRestartFeedback() {
		setFeedbackType(null);
		setFeedbackSent(false);
	}

	function handleFeedbackSent() {
		setFeedbackSent(true);
	}

	return (
		<>
			<TouchableOpacity style={styles.button} onPress={handleOpen}>
				<ChatTeardropDots
					size={24}
					weight="bold"
					color={theme.colors.text_on_brand_color}
				/>
			</TouchableOpacity>

			<BottomSheet
				ref={bottomSheetRef}
				snapPoints={[1, 280]}
				backgroundStyle={styles.modal}
				handleIndicatorStyle={styles.indicator}
			>
				{feedbackSent ? (
					<Success onSendAnotherFeedback={handleRestartFeedback} />
				) : (
					<>
						{feedbackType ? (
							<Form
								feedbackType={feedbackType}
								onFeedbackCanceled={handleRestartFeedback}
								onFeedbackSent={handleFeedbackSent}
							/>
						) : (
							<Options onFeedbackTypeChanged={setFeedbackType} />
						)}
					</>
				)}
			</BottomSheet>
		</>
	);
}

export default gestureHandlerRootHOC(Widget); // gestureHandlerRootHOC e para funcionar os gestos mesmo dentro de um componente pq ele esta sendo usado dentro do componente meio que eh isso
