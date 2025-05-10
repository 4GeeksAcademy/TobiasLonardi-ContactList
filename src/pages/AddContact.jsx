import { Link } from "react-router-dom"

export const AddContact = () => {
   return (
      <div className="container">
         <div className=" row flex-column justify-content-center align-items-center">
            <h1 className="text-center">Add new contact</h1>
            <form>
               <div className="mb-3 col-12">
                  <label for="exampleInputEmail1" className="form-label">Full Name</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               </div>
               <div className="mb-3 col-12">
                  <label for="exampleInputEmail1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               </div>
               <div className="mb-3 col-12">
                  <label for="exampleInputEmail1" className="form-label">Phone</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               </div>
               <div className="mb-3 col-12">
                  <label for="exampleInputEmail1" className="form-label">Address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               </div>
               
            </form>
              <button type="submit" class="btn btn-primary">Save</button>
              <Link to="/">Or get back to contacts</Link>

         </div>
      </div>

   )
}