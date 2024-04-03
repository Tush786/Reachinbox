import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from './UseDarkmode';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_THEAM } from '../redux/actiontype';
import { Theam_reducer, theamreducer } from '../redux/reducer';

function DarkModeToggle() {
	// const [colorTheme, setTheme] = useDarkMode();
	const [checked, setChecked] = useState(false);

	// const toggleDarkMode = (checked) => {
	// 	setTheme(colorTheme);
	// 	setDarkMode(checked);
	// };

	   
    const Theam=useSelector(state=>state.theam.theam)
	console.log(Theam)

    const dispatch=useDispatch();

    function TheamChange(){
		setChecked(!checked)
		dispatch(theamreducer(Theam === 'dark' ? 'light' : 'dark'));
    }
 


	return (
		<div className='border-2 px-4 py-1 rounded-[25px] border-grey-500'>
			<DarkModeSwitch
				className='ml-5'
				
				onChange={TheamChange}
				checked={checked}
				size={25}
			/>
		</div>
	);
}

export default DarkModeToggle;