import { Transaction } from '@/@types/transaction'
import { NextResponse } from 'next/server'

const data = [
	{
		effectedAt: '2024-03-14T09:00:00Z',
		value: 100.5,
		description: 'Compra no supermercado',
	},
	{
		effectedAt: '2024-03-14T13:30:00Z',
		value: -50.0,
		description: 'Pagamento da conta de luz',
	},
]

export const GET = async () => {
	const transactions: Promise<Transaction[]> = await fetch(
		'http://localhost:3333/transactions'
	).then((res) => res.json())

	return NextResponse.json({ transactions })
}
