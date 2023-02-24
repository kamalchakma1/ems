import style from "../styles/userCard.module.css"
import img2 from "../images/user.png"
const UserCard=()=>{
    return(
        <>
        <div className={style.card}>
            <div className={style.card__user}>

                <img src={img2} alt="user one"/>
            </div>

            <h3>James Bond</h3>
            <div className={style.card__userInfo}>
                <p>Role: Software Developer</p>
                <p>Manager: Babesh</p>
                <p>Dept. : Engineering</p>
                <div className={style.card__userInfoOnHover}>
                    <button className={style.card__attendanceBtn}><a href="#">Details</a></button>
                    <button className={style.card__editBtn}><a href="#">Edit</a></button>
                    <button className={style.card__deleteBtn}><a href="#">Delete</a></button>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default UserCard