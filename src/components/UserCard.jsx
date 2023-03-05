import style from "../styles/userCard.module.css"
import img2 from "../images/user.png"
import axios from "axios"
const UserCard=({name,role,status,date,id})=>{

    const empDelete=(id)=>{

         axios.delete(`http://localhost:5000/data/${id}`)
        //  window.location.reload();
    }
    return(
        <>
        <div className={style.card}>
            <div className={style.card__user}>

                <img src={img2} alt="user one"/>
            </div>

            <h3>{name}</h3>
            <div className={style.card__userInfo}>
                <p>Role: {role} </p>
                <p>Status: {status} </p>
                <p>Date. : {date}</p>
                <div className={style.card__userInfoOnHover}>
                    <button className={style.card__attendanceBtn}><a href="#">Details</a></button>
                    <button className={style.card__editBtn}><a href="#">Edit</a></button>
                    <button className={style.card__deleteBtn} onClick={()=>{empDelete(id)}}><a href="#">Delete</a></button>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default UserCard