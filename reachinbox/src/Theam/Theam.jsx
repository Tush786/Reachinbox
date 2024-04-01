import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from './UseDarkmode';

function DarkModeToggle() {
	const [colorTheme, setTheme] = useDarkMode();
	const [isDarkMode, setDarkMode] = useState(
		colorTheme === 'light' ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkMode(checked);
	};

	return (
		<div className='border-2 px-4 py-1 rounded-[25px] border-grey-500'>
			<DarkModeSwitch
				className='ml-5'
				onChange={toggleDarkMode}
				checked={isDarkMode}
				size={25}
			/>
		</div>
	);
}

export default DarkModeToggle;