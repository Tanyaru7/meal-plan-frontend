import { MdEdit, MdDelete } from "react-icons/md";

export const MyMeals = ({text, updatingInput, deletMeal}) =>{
    return(
        <div>
            <p>{text}</p>
            <MdEdit onClick={updatingInput}></MdEdit>
            <MdDelete onClick={deletMeal}></MdDelete> 
        </div>
    )
}