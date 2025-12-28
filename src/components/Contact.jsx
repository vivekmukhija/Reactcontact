import React , {useState} from 'react'
import Cards from './Cards';
const Contact = () => {

const [name, setName] = useState('');
const [num, setNum] = useState('');
const [email, setEmail] = useState('');


const [phonebook,setPhonebook] = useState([])



const formSubmit = (e)=>{
    e.preventDefault()
    setPhonebook([...phonebook,{name,num,email}])
    setName('')
    setNum('')
    setEmail('')
}
const deletehandler = (idx)=>{
    const copyphonebook = [...phonebook]
    copyphonebook.splice(idx,1)
    setPhonebook(copyphonebook)
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


