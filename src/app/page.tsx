import { Transaction } from '@/@types/transaction'
import { clsx } from 'clsx'
import { format } from 'date-fns'
import { NewTransaction } from './new-transaction'

const Home = async () => {
	const response = await fetch('http://localhost:3000/api/transactions', {
		method: 'GET',
		cache: 'no-store',
	}).then((res) => res.json())

	const transactions: Transaction[] = response.transactions

	return (
		<div className='space-y-60'>
			<div className='space-y-20'>
				<h1 className='text-3xl text-center'>Transações</h1>

				<table className='w-full'>
					<thead>
						<tr className='border-b border-b-zinc-700'>
							<th className='pb-2 text-zinc-400'>Descrição</th>
							<th className='pb-2 text-zinc-400'>Valor</th>
							<th className='pb-2 text-zinc-400'>Efetuado em</th>
						</tr>
					</thead>

					<tbody className='w-full [&_tr:last-child]:border-0'>
						{transactions.map((transaction) => {
							const formattedDate = format(new Date(transaction.effectedAt), 'dd/MM/yyyy HH:mm:ss')
							const formattedValue = transaction.value.toLocaleString('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							})

							return (
								<tr
									key={transaction.id}
									className='border-b text-center border-b-zinc-800 hover:bg-zinc-800 text-sm'
								>
									<td className='p-2'>{transaction.description}</td>
									<td
										className={clsx('p-2', {
											'text-red-400': transaction.value < 0,
											'text-emerald-500': transaction.value >= 0,
										})}
									>
										{formattedValue}
									</td>
									<td className='p-2'>{formattedDate}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>

			<NewTransaction />
		</div>
	)
}

export default Home
