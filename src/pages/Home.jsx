import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const defaultContact =
	{
		"name": "string",
		"phone": "",
		"email": "",
		"address": ""
	}

	const defaultAPI = "https://playground.4geeks.com/contact"

	const [contact, setContact] = useState(defaultContact)

	const [allContacts, setAllContacts] = useState([])

	async function getAllContacts() {
		const result = await fetch(`${defaultAPI}/agendas/Tobias`)
		const data = await result.json()
		if (result.ok) {
			setAllContacts(data.contacts)
		}
	}

	useEffect(() => {
		getAllContacts()
	}, [])

	return (
		<div className="text-center mt-5">
			<nav className="navbar navbar-light bg-light d-flex justify-content-end px-5">
				<Link to="/addContact" className="btn btn-success">
					Add Contact
				</Link>


			</nav>

			<div className="d-flex flex-column ">
				{allContacts.map((item) =>

					<div className=" bg-primary-subtle border border-primary-subtle rounded-3">
						<div className="d-flex justify-content-start w-100">

							<img src="https://i.pravatar.cc/300" alt="" className="profilePicture rounded-circle" />

							<div className="d-flex flex-column align-items-baseline p-4">

								<span className="">
									<h5>{item.name}</h5>

								</span>
								<span className="d-flex">
									<i class="fa-solid fa-phone p-1 px-2"></i>
									<p>{item.phone}</p>

								</span>
								<span className="d-flex">
									<i class="fa-solid fa-envelope p-1 px-2"></i>
									<p>{item.email}</p>

								</span>
								<span className="d-flex">
									<i className="fa-solid fa-location-dot p-1 px-2"></i>
									<p>{item.address}</p>

								</span>


							</div>
							<div className="d-flex justify-content-end w-100 ">
								<i className="fa-solid fa-pencil p-4"></i>

								<i className="fa-solid fa-trash p-4 btn"data-bs-target="#exampleModalToggle" data-bs-toggle="modal"></i>
							</div>
						</div>




					</div>

				)}
			</div>
			<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							are you sure do you want to delete it?
						</div>
						<div class="modal-footer">
							<button class="btn btn-secondary" data-bs-dismiss="modal">delete</button>
							<button class="btn btn-primary" data-bs-dismiss="modal">cancel</button>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);
}; 