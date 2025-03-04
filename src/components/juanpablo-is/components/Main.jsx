// Components
import InputPassword from './InputPassword'
import InputRangePassword from './InputRangePassword'
import CheckboxOptions from './CheckboxOptions'
import ActionsButtons from './ActionsButtons'
import InputRangeConcurrence from './InputRangeConcurrence'

const Main = () => {
	return (
		<div
			id='juanpablo-is'
			className='max-w-xl h-screen flex flex-col items-center justify-start text-center w-10/12 m-auto'
		>
			<div className='w-full flex flex-col justify-center flex-1'>
				<div className='flex flex-col justify-end flex-1 mb-5'>
					<h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
						Password Generator
					</h1>

					<p className='text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400'>
						Create strong and secure passwords
					</p>
				</div>
				<InputPassword />
			</div>

			<div className='flex flex-col w-full max-w-xl my-2  overflow-auto'>
				<hr className='my-2 sm:my-4' />

				<div className=''>
					<InputRangePassword />
					<CheckboxOptions />
					<InputRangeConcurrence />
				</div>

				<hr className='my-2 sm:my-4' />
			</div>

			<ActionsButtons />
		</div>
	)
}

export default Main
