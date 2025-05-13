import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


export const UpdateContact = () => {
   const defaultAPI = "https://playground.4geeks.com/contact"
   const {id} = useParams();

   const [contact, SetContact] = useState({})

   async function setDefaultContactValue() {
      try {
         const responds = await fetch(`${defaultAPI}/agendas/Tobias/contacts`)
         const data = await responds.json()

         if (responds.ok) {
            let result = {}

            const arrayContacts = data.contacts
            arrayContacts.forEach(element => {

               if (element.id == id){
                  result = element
                console.log(result)

               }
            });
            setDefaultValue(result);
         }
      } catch (error) {
         console.log(error);
      }

   }

   useEffect(() => {
      setDefaultContactValue()
   }, [])

   function setDefaultValue(contact) {
      console.log(contact)
      SetContact(contact);
   }


   async function updateContactValue() {
      try {
          const result = await fetch(`${defaultAPI}/agendas/Tobias/contacts/${id}`, {
         method: "PUT",
         headers:{"Content-Type" : "application/json"
            },
         body: JSON.stringify(contact)
      })
      } catch (error) {
         console.log(error);
      }
     

   }


   function onChangeContact(event) {
      SetContact(
         {
            ...contact,
            [event.target.name]: event.target.value
         }

      )
   }
   return (
      <div className="container">
         <div className=" row flex-column justify-content-center align-items-center">
            <h1 className="text-center">Add new contact</h1>
            <form action=""
               onSubmit={(event) => { event.preventDefault() }}>
               <div className="mb-3 col-12">
                  <label for="exampleInputEmail1" className="form-label">Full Name</label>
                  <input
                     type="email"
                     className="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Full name"
                     name="name"
                     onChange={onChangeContact}
                  />
               </div>
               <div className="mb-3 col-12">
                  <label for="exampleInputEmail1" className="form-label">Email</label>
                  <input
                     type="email"
                     className="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Email adress"
                     name="email"
                     onChange={onChangeContact} />
               </div>
               <div className="mb-3 col-12">
                  <label for="exampleInputEmail1" className="form-label">Phone</label>
                  <input
                     type="email"
                     className="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Phone number"
                     name="phone"
                     onChange={onChangeContact}
                  />
               </div>
               <div className="mb-3 col-12">
                  <label for="exampleInputEmail1" className="form-label">Address</label>
                  <input
                     type="email"
                     className="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Home address"
                     name="address"
                     onChange={onChangeContact} />
               </div>

            </form>
            <Link type="submit" class="btn btn-primary" to="/" onClick={updateContactValue}>Save</Link>
            <Link to="/">Or get back to contacts</Link>

         </div>
      </div>
   )
}