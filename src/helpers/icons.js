import { 
    faTrash, 
    faSignOutAlt, 
    faEdit,
    faBan, 
    faSpinner,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt
  } from "@fortawesome/free-solid-svg-icons";
  
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons =() => {
    library.add(faTrash, faSignOutAlt, faEdit, faBan, faSpinner, faPlusCircle, faPhone, faEnvelope, faMapMarkedAlt);
}

export default Icons;
  