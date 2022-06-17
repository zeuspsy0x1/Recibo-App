import React, { useState } from 'react'
import './App.css'

function App() {
	const [totalAseo, setTotalAseo] = useState(0)
	const [m2, setM2] = useState(0)
	const [totalAcueducto, setTotalAcueducto] = useState(0)
	const [pisoUno, setPisoUno] = useState({ aseo: 0, agua: 0, m2: 0 })
	const [pisoDos, setPisoDos] = useState({ aseo: 0, agua: 0, m2: 0 })
	const [pisoTres, setPisoTres] = useState({ aseo: 0, agua: 0, m2: 0 })

	let calculosAlcalcular = () => {
		let p1M2 = pisoUno.m2
		let p2M2 = pisoDos.m2
		let aaaaa = p1M2 + p2M2
		let p3M2 = m2 - aaaaa

		setPisoTres((prev) => ({ ...prev, m2: p3M2 }))

		let porcentajeM2pisoUno = (p1M2 * totalAcueducto) / m2
		let porcentajeM2pisoDos = (p2M2 * totalAcueducto) / m2
		let porcentajeM2pisoTres = (p3M2 * totalAcueducto) / m2

		setPisoUno((prev) => ({ ...prev, agua: porcentajeM2pisoUno }))
		setPisoDos((prev) => ({ ...prev, agua: porcentajeM2pisoDos }))
		setPisoTres((prev) => ({ ...prev, agua: porcentajeM2pisoTres }))
	}

	return (
		<>
			<div className=''>
				<div className='text-center display-5 fw-bold text-white'>Dividir recibo del agua</div>
				<br></br>
				<br></br>
				<form
					onSubmit={(e) => {
						e.preventDefault()
					}}>
					<div className='input-group mb-3 '>
						<span className='input-group-text' id='basic-addon1'>
							Total del Aseo:
						</span>
						<input
							type='text'
							className='form-control bg-dark text-white'
							placeholder='0'
							aria-label='Username'
							aria-describedby='basic-addon1'
							onChange={(e) => {
								e.preventDefault()
								setTotalAseo(parseInt(e.target.value))
							}}></input>{' '}
						<br></br>
						<br></br>
					</div>
					<div className='input-group mb-3'>
						<span className='input-group-text' id='basic-addon1'>
							Total del Acueducto:
						</span>
						<input
							type='text'
							className='form-control bg-dark text-white'
							placeholder='0'
							aria-label='Username'
							aria-describedby='basic-addon1'
							onChange={(e) => {
								e.preventDefault()
								setTotalAcueducto(parseInt(e.target.value))
							}}></input>
					</div>

					<div className='input-group mb-3'>
						<span className='input-group-text' id='basic-addon1'>
							M2 Totales:
						</span>
						<input
							type='text'
							className='form-control bg-dark text-white'
							placeholder='0'
							aria-label='Username'
							aria-describedby='basic-addon1'
							onChange={(e) => {
								e.preventDefault()
								setM2(parseInt(e.target.value))
							}}></input>
					</div>

					<div className='input-group mb-3'>
						<span className='input-group-text' id='basic-addon1'>
							M2 Piso 1:
						</span>
						<input
							type='text'
							className='form-control bg-dark text-white'
							placeholder='0'
							aria-label='Username'
							aria-describedby='basic-addon1'
							onChange={(e) => {
								e.preventDefault()
								setPisoUno((prev) => ({ ...prev, m2: parseInt(e.target.value) }))
							}}></input>
					</div>

					<div className='input-group mb-3'>
						<span className='input-group-text' id='basic-addon1'>
							M2 Piso 2:
						</span>
						<input
							type='text'
							className='form-control bg-dark text-white'
							placeholder='0'
							aria-label='Username'
							aria-describedby='basic-addon1'
							onChange={(e) => {
								e.preventDefault()
								setPisoDos((prev) => ({ ...prev, m2: parseInt(e.target.value) }))
							}}></input>
					</div>

					<br></br>
					<br></br>
					<div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
						<button
							onClick={() => {
								calculosAlcalcular()
							}}
							type='submit'
							className='btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold'>
							Calcular
						</button>
					</div>
					<br></br>
					<br></br>

					<div className='container px-4 fw-bold d-grid gap-3 d-sm-flex justify-content-sm-center text-white'>
						<div className='row'>
							<div className='col lg'>
								<div className='text-left'> Piso 1: </div>
								<div>Aseo: {Math.ceil(totalAseo / 3)}</div>
								<div>Agua: {Math.ceil(pisoUno.agua)}</div>
								<div className='fs-4 text-danger text-center'>
									<>Total:</> <br></br>
									<>{Math.ceil(pisoUno.agua + totalAseo / 3)}</>
								</div>
							</div>
							<div className='col'>
								Piso 2:
								<div>Aseo: {Math.ceil(totalAseo / 3)}</div>
								<div>Agua: {Math.ceil(pisoDos.agua)}</div>
								<div className='fs-4 text-danger text-center'>
									<>Total:</> <br></br>
									{Math.ceil(pisoDos.agua + totalAseo / 3)}
								</div>
							</div>
							<div className='col'>
								Piso 3:
								<div>Aseo: {Math.ceil(totalAseo / 3)}</div>
								<div>Agua: {Math.ceil(pisoTres.agua)}</div>
								<div className='fs-4 text-danger text-center'>
									<>Total:</> <br></br>
									{Math.ceil(pisoTres.agua + totalAseo / 3)}
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default App

//he explains how to set the state in a better way using the previous state and the new value
//https://www.youtube.com/watch?v=yvTGXH7uybA&ab_channel=DaveGray

//d-flex justify-content-center aling-items-center
