import { Transaction } from '@/@types/transaction'
import { NextResponse } from 'next/server'

export const GET = async () => {
	const transactions: Promise<Transaction[]> = await fetch(
		'http://localhost:3333/transactions'
	).then((res) => res.json())

	return NextResponse.json({ transactions })
}
