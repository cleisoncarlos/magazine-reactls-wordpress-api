import { Link } from "react-router-dom";


export default function Header() {
  return (
  


    <header>
 
     <div className='container'>
 
       <div className='row py-1'>
 
         <div className='col-lg-3'>
            <Link to='/'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJf26pzoEXiwVWjiKclkU0hU4RSwpQ4TNLA&s' className='img-fluid' alt='...'/>
            </Link>
        
        
         </div>
       </div>
 
     </div>

     <div className="container mb-5">
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
   <div className="container-fluid">
     <a className="navbar-brand" href="/">
     <img src='../../public/images/logo.jpg' alt='logo' />
     </a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="/">Home</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="/">Link</a>
         </li>
         <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Dropdown
           </a>
           <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="/">Action</a></li>
             <li><a className="dropdown-item" href="/">Another action</a></li>
             <li><hr className="dropdown-divider"/></li>
             <li><a className="dropdown-item" href="/">Something else here</a></li>
           </ul>
         </li>
   
       </ul>
       <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-success" type="submit">Search</button>
       </form>
     </div>
   </div>
 </nav>
     </div>

    </header>
 
 
  )
}
