import React , {useState} from 'react'
import Cards from './Cards';
const Contact = () => {

const [name, setName] = useState('');
const [num, setNum] = useState('');
const [email, setEmail] = useState('');

const localUser = JSON.parse(localStorage.getItem('allUsers')) || []


const [phonebook,setPhonebook] = useState(localUser)



const formSubmit = (e)=>{
    e.preventDefault()
    const oldPhoneBook= [...phonebook]
    oldPhoneBook.push({name,num,email})


    setPhonebook(oldPhoneBook)
    localStorage.setItem('allUsers', JSON.stringify(oldPhoneBook))
    setName('')
    setNum('')
    setEmail('')
}
const deletehandler = (idx)=>{
    const copyphonebook = [...phonebook]
    copyphonebook.splice(idx,1)
    setPhonebook(copyphonebook)
    localStorage.setItem('allUsers', JSON.stringify(copyphonebook))
    
}



  return (

        <div className='contact-box'>
                <div className='addcontact'>
                    <h1>Add Contacts</h1>
    <form onSubmit={(e)=>{
        formSubmit(e)
    }}> 
        
        <input  placeholder='Enter Name' type="text" value={name} required onChange={(e)=>{
            setName(e.target.value)
        }}></input>
        <input placeholder='Enter Number' type="text" value={num} required onChange={(e)=>{
            setNum(e.target.value)
        }} ></input>
        <input placeholder='Enter Email' type="email" value={email} required onChange={(e)=>{
            setEmail(e.target.value)
        }}></input>
        <button>Submit</button>
    </form>


    </div>
            <div className='contacts'>
                {phonebook.map((elem,idx)=>{
                    return (<Cards elem={elem} idx={idx} deletehandler= {deletehandler}/>
                    )
                })}
                </div>
        </div>
  )
}

export default Contact


