import studentFormBackground from '../assets/studentformbg.png'
import administratorFormBackground from '../assets/administratorformbg.png'
import EDUFLEXWhite from '../assets/EDUFLEXWhite.svg'
import ActionBtn from './ActionBtn'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const NB = 'Enter your school-provided  credentials to get started';

export default function GetStarted() {
    const params = useParams()
    const UserAction = params.action;
    const initialUser = params.user;
const navigate = useNavigate()

let backArrow = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M23.75 13.7501H9.78753L15.8875 7.65008C16.375 7.16258 16.375 6.36258 15.8875 5.87508C15.7719 5.7592 15.6345 5.66726 15.4833 5.60454C15.3321 5.54181 15.17 5.50952 15.0063 5.50952C14.8426 5.50952 14.6805 5.54181 14.5292 5.60454C14.378 5.66726 14.2407 5.7592 14.125 5.87508L5.88753 14.1126C5.77165 14.2282 5.67971 14.3656 5.61699 14.5168C5.55426 14.668 5.52197 14.8301 5.52197 14.9938C5.52197 15.1575 5.55426 15.3196 5.61699 15.4709C5.67971 15.6221 5.77165 15.7594 5.88753 15.8751L14.125 24.1126C14.2408 24.2283 14.3781 24.3201 14.5293 24.3827C14.6806 24.4454 14.8426 24.4776 15.0063 24.4776C15.1699 24.4776 15.332 24.4454 15.4832 24.3827C15.6344 24.3201 15.7718 24.2283 15.8875 24.1126C16.0033 23.9968 16.0951 23.8595 16.1577 23.7083C16.2203 23.557 16.2526 23.395 16.2526 23.2313C16.2526 23.0677 16.2203 22.9056 16.1577 22.7544C16.0951 22.6032 16.0033 22.4658 15.8875 22.3501L9.78753 16.2501H23.75C24.4375 16.2501 25 15.6876 25 15.0001C25 14.3126 24.4375 13.7501 23.75 13.7501Z" fill="white"/>
</svg>

    let background = ''
    if(initialUser == 'student'){
        background = studentFormBackground;
    }
    else if(initialUser == 'admin'){
        background = administratorFormBackground;
    }
    return(
        <section className='getStartedMainContainer'>
            <span onClick={() => navigate(-1)} className='backBtn' >{backArrow} Back</span>
            <div style={{background: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' , }} className='formBg'>
                <div className='formBgFilter'>
                    <article>
                        <img src={EDUFLEXWhite} />
                        <p>Streamline Your Learning and Administration with EduFlex</p>
                    </article>
                </div>
            </div>

            <div  className='formcontainer'>
            {UserAction == 'create' && <CreateAccountForm user = {initialUser} caption={initialUser == 'admin' ? 'Faculty/Admin Sign-Up' : 'Student Sign-Up'}/>}
            {UserAction == 'login' && <LoginToAccountForm user = {initialUser}/>}
            </div>
        </section>
    )
}

const CreateAccountForm = ({user = '',  caption  = 'none'}) => {
    const navigate = useNavigate();
    
    const haveAnAccount = <span onClick = {() => navigate(`../login/${user}`)}  className='lastBtn'><ActionBtn isLight = {true} btnHeight={35} btnWidth={200} content='Have an account? Login' /></span>
    if(user == 'student'){
        return(
        <form >
            <label>{caption}</label>
            <p>{NB}</p>
            <label htmlFor="studentEmail">School Email/ Matric No.</label> <br />
            <input type="email" name="studentEmail" id="studentEmail" placeholder='Enter your school email or Matric No.' /> <br/>

            <label htmlFor="studentPassword">Password</label> <br />
            <input type="password" name="studentPassword" id="studentPassword" placeholder='Enter your password' /> <br />

            <label htmlFor="studentCfPassword">Confirm Password</label> <br />
            <input type="password" name="studentCfPassword" id="studentCfPassword"  placeholder='Re-enter your password'/> <br />

            <ActionBtn isSubmit={true} btnHeight={40} btnWidth={350} content='Create account' />
            {haveAnAccount}
        </form>)
    }
    else if (user == 'admin'){
        return(
            <form >
                <label>{caption}</label>
                <p>{NB}</p>
                <label htmlFor="adminEmail">Email/Employment No.</label> <br />
                <input type="email" name="adminEmail" id="adminEmail" placeholder='Enter your school email or Employment No.' /> <br/>

                <label htmlFor="adminSurname">Surname</label> <br />
                <input type="password" name="adminSurname" id="adminSurname" placeholder='Enter your surname' /> <br />

                <label htmlFor="adminCfSurname">Confirm Surname</label> <br />
                <input type="password" name="adminCfSurname" id="adminCfSurname"  placeholder='Re-enter your surname'/> <br />

                <ActionBtn isSubmit={true} btnHeight={40} btnWidth={350} content='Create account' />
                {haveAnAccount}
        </form>)
    }
    else{
        return(<div style={{width: '100%', height: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <em style={{color: 'red', textAlign: 'center',}}>unable to create account: Unable to acess Id</em>
        </div>)
    }
}

const LoginToAccountForm = ({ user = ''}) => {
    const navigate = useNavigate()
    const dontHaveAnAccount = <span onClick = {() => navigate(`../create/${user}`)} className='lastBtn'><ActionBtn isLight = {true} btnHeight={35} btnWidth={200} content="Don't have an account? Sign Up" /></span>
    if(user == 'student'){
        return(
            <form style={ {marginTop: '30px'}}>
                <label>Log in</label>
                <p>{NB}</p>
                <label htmlFor="studentEmail">School Email/ Matric No.</label> <br />
                <input type="email" name="studentEmail" id="studentEmail" placeholder='Enter your school email or Matric No.' /> <br/>

                <label htmlFor="studentPassword">Password</label> <br />
                <input type="password" name="studentPassword" id="studentPassword" placeholder='Enter your password' /> <br />

                <ActionBtn isSubmit={true} btnHeight={40} btnWidth={350} content='Create account' />
                {dontHaveAnAccount}
            </form> 
        )
    }
    else if (user == 'admin'){
        return(
            <form style={ {marginTop: '30px'}}>
                <label>Log in</label>
                <p>{NB}</p>
                <label htmlFor="adminEmail">Email/Employment No.</label> <br />
                <input type="email" name="adminEmail" id="adminEmail" placeholder='Enter your school email or Employment No.' /> <br/>

                <label htmlFor="adminSurname">Surname</label> <br />
                <input type="password" name="adminSurname" id="adminSurname" placeholder='Enter your surname' /> <br />

                <ActionBtn isSubmit={true} btnHeight={40} btnWidth={350} content='Create account' />
                {dontHaveAnAccount}
            </form>
        )
    }
    else{
        return(<em style={{color: 'red', textAlign: 'center', marginTop: '200px'}}>
            unable to login account: Unable to acess Id
        </em>)
    }
}