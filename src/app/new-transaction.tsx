'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export const NewTransaction = () => {
	const [transactionValue, setTransactionValue] = useState<number | null>()
	const [transactionDescription, setTransactionDescription] = useState('')

	const router = useRouter()

	const handleAddTransaction = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!transactionValue || !transactionDescription)
			return alert('Insira valores válidos para os campos.')

		await axios.post('http://localhost:3333/transactions', {
			description: transactionDescription,
			value: transactionValue,
			effectedAt: new Date(),
		})

		setTransactionValue(null)
		setTransactionDescription('')
		router.refresh()
	}

	return (
		<div className='mt-40 flex flex-col items-center gap-5'>
			<h1 className='text-xl'>Adicionar transação</h1>

			<form
				className='flex flex-col gap-10'
				onSubmit={handleAddTransaction}
			>
				<div className='space-x-3'>
					<input
						type='text'
						placeholder='Descrição'
						value={transactionDescription}
						onChange={(e) => setTransactionDescription(e.target.value)}
						className='border border-zinc-500 rounded p-1.5 bg-zinc-800'
					/>

					<input
						type='number'
						placeholder='Valor'
						value={transactionValue ?? ''}
						onChange={(e) => setTransactionValue(Number(e.target.value))}
						className='border border-zinc-500 rounded p-1.5 bg-zinc-800'
					/>
				</div>

				<button
					type='submit'
					className='bg-zinc-300 text-zinc-950 w-2/3 mx-auto rounded p-2 hover:bg-zinc-300/80'
				>
					Criar transação
				</button>
			</form>
		</div>
	)
}
