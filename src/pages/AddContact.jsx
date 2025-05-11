import { useState } from "react"
import { Link } from "react-router-dom"



export const AddContact = () => {
   const defaultApi="https://playground.4geeks.com/contact/agendas/Tobias/contacts"

   const contactDefaultValue = {
      name:"",
      email:"",
      phone:"",
      address:"",
   }

   const [contact,SetContact] = useState(contactDefaultValue)

   function onChangeContact(event){
      SetContact(
         {
            ...contact,
            [event.target.name] : event.target.value
         }

      )
   }

   async function addNewContact(){
      try {
         const result = await fetch(defaultApi, 
         {method:"POST",
            headers:{"Content-Type" : "application/json"
            },

            body: JSON.stringify(contact)
         }
        
      )
      if(result.ok){
         SetContact(contactDefaultValue)
      }
      } catch (error) {
         console.log(error)
      }
    
   }
   return (
      <div className="container">
         <div className=" row flex-column justify-content-center align-items-center">
            <h1 className="text-center">Add new contact</h1>
            <form action=""
				   onSubmit={(event) => {event.preventDefault()}}>
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
              <Link type="submit" class="btn btn-primary" to="/" onClick={addNewContact} >Save</Link>
              <Link to="/">Or get back to contacts</Link>

         </div>
      </div>

   )
}