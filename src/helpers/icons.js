import { 
    faTrash, 
    faSignOutAlt, 
    faEdit,
    faBan, 
    faSpinner,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock
  } from "@fortawesome/free-solid-svg-icons";
  
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons =() => {
    library.add(faTrash, faSignOutAlt, faEdit, faBan, faSpinner, faPlusCircle, faPhone, faEnvelope, faMapMarkedAlt, faLock);
}

export default Icons;
  