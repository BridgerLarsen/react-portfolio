import { 
    faTrash, 
    faSignOutAlt, 
    faEdit,
    faBan, 
    faSpinner,
    faPlusCircle
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";

const Icons =() => {
    library.add(faTrash, faSignOutAlt, faEdit, faBan, faSpinner, faPlusCircle);
}

export default Icons;
  