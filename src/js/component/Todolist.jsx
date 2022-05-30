import React, { useState } from "react";

export const TodoList = () => {
	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([
		"Pasear al perro",
		"Hacer la compra",
	]);
	const [mouseover, setMouseover] = useState();

	const agregarTarea = (event) => {
		event.preventDefault();
		setListaTareas([...listaTareas, tarea]);
		setTarea("");
	};

	const eliminarTarea = (i) => {
		let newListaTareas = listaTareas.filter((element, index) => {
			if (i != index) return element;
		});
		setListaTareas(newListaTareas);
	};

	return (
		<div>
			<form onSubmit={tarea ? agregarTarea : (e) => e.preventDefault()}>
				<div className="container d-flex flex-column">
					<h1 className="display-1 mx-auto">todos</h1>
					<div className="form-group shadow mt-5 blanco mb-0 d-flex">
						<input
							type="text"
							onChange={(e) => setTarea(e.target.value)}
							className="outlinenone py-3 display-4 border-0 pl-3 d-flex"
							placeholder="Escribe tu tarea aqui"
							value={tarea}
						/>
						<button
							type="submit"
							className="btn btn-outline-dark mr-3 my-auto ml-3">
							<i className="my-auto mx-auto fas fa-plus"></i>
						</button>
					</div>
					<div className="list-group shadow blanco">
						{listaTareas.map((tareas, index) => {
							return (
								<a
									href="#"
									key={index}
									onMouseOver={() => {
										setMouseover(index);
									}}
									onMouseOut={() => {
										setMouseover();
									}}
									className="border-right-0 border-left-0 list-group-item list-group-item-action list-group-item-light">
									<span className="d-flex display-4 justify-content-between">
										<span>{tareas}</span>{" "}
										<span
											className={
												"cruz" +
												(mouseover == index
													? "activo"
													: "")
											}
											onClick={() => {
												eliminarTarea(index);
											}}>
											<h1 className="h3">🚮</h1>
										</span>
									</span>
								</a>
							);
						})}
						<div className="border-right-0 border-left-0 p-2 list-group-item list-group-item-light">
							{listaTareas.length == 0
								? "No hay tareas"
								: "Hay " + listaTareas.length + " tareas"}
						</div>
					</div>
					<div className="p-1 cajita1 border-top-0 mx-auto list-group-item list-group-item-light"></div>
					<div className="p-1 cajita2 mx-auto list-group-item list-group-item-light"></div>
				</div>
			</form>
		</div>
	);
};
