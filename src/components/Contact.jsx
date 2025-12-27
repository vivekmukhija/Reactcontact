import React , {useState} from 'react'
const Contact = () => {

const [name, setName] = useState('');
const [num, setNum] = useState('');
const [email, setEmail] = useState('');


const [phonebook,setPhonebook] = useState([])



const formSubmit = (e)=>{
    e.preventDefault()
    const oldPhonebook = [...phonebook]
    oldPhonebook.push({name,num,email})
    setPhonebook(oldPhonebook)
    setName('')
    setNum('')
    setEmail('')
}



  return (
        <div className='contact-box'>
                <div className='addcontact'>
                    <h1>Add Contacts</h1>
    <form onSubmit={(e)=>{
        formSubmit(e)
    }}>
        <label htmlFor="name">Enter Name</label>
        <input type="text" value={name} required onChange={(e)=>{
            setName(e.target.value)
        }}></input>
        <label htmlFor="num">Enter Number</label>
        <input type="text" value={num} required onChange={(e)=>{
            setNum(e.target.value)
        }} ></input>
         <label htmlFor="email">Enter Email</label>
        <input type="email" value={email} required onChange={(e)=>{
            setEmail(e.target.value)
        }}></input>
        <button>Submit</button>
    </form>


    </div>

        <div className="contacts">
             <h1>Contact List</h1>
            {phonebook.map((elem,idx)=>{
                return <div key={idx} className='contactCards'>
                        <div className='contactCard'>
                            <i class="userIcon ri-contacts-line"></i>
                            <div className='info'>
                                <h4>{elem.name.toUpperCase()}</h4>
                                <h4>{elem.num.toUpperCase()}</h4>

                            </div>
                        </div>
                        </div>
            })}
        </div>
        </div>
  )
}

export default Contact
