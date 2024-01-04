import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [height,setHeight] = useState(0)
  const [weight,setWeight] = useState(0)
  const [bmi,setBmi] = useState(0)
  const [comment,setComment] = useState('')

  const [isHeight,setIsHeight] = useState(false)
  const [isWeight,setIsWeight] = useState(false)

  const handleValidate = (e)=>{
    const {name,value} = e.target 
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name==='height'){
        setHeight(value)
        setIsHeight(true)
      }else{
        setWeight(value)
        setIsWeight(true)
      }
    }else{
      if(name==='height'){
        setHeight(value)
        setIsHeight(false)
      }else{
        setWeight(value)
        setIsWeight(false)
      }
    }
  }

  const handleCheck = (e)=>{
    e.preventDefault()
    if(!height || !weight){
      alert('Please fill all the fields')
    }else{
      const mheight=height/100
      setBmi(parseFloat(weight/mheight**2).toFixed(2))
    }
  }

  const handleComment = ()=>{
    
  }

  const handleClear = (e)=>{
    setHeight(0)
    setIsHeight(false)
    setWeight(0)
    setIsWeight(false)
    setBmi(0)
  }

  return (
    
      <>
      <div className='d-flex justify-content-center align-items-center w-100' style={{height:'100vh'}}>
        <div className=' rounded text-center' style={{width:'400px'}}>
          <h1 className='text-center text-primary mt-3'>BMI Check</h1>

          <div className='mt-5'>
            <p className='text-center'>{comment}</p>
          </div>

            <div className='bg-light rounded m-3'>
              <h1 className=''>{bmi}</h1>
            </div>

            <form action="" onSubmit={handleCheck}>
            <div className='mt-3'>
              <TextField
                className='text-light'
                required
                id="outlined-required"
                label="Height in Centimeters"
                defaultValue="Hello World"
                fullWidth
                name='height'
                value={height || ''}
                onChange={(e)=>{handleValidate(e)}}
              />
            </div>
            <div className='mt-3'>
            <TextField
                className='text-light'
                required
                id="outlined-required"
                label="Weight in Kilogram"
                defaultValue="Hello World"
                fullWidth
                name='weight'
                value={weight|| ''}
                onChange={(e)=>handleValidate(e)}
              />
            </div>

            <Stack spacing={2} direction="row" className='mt-5'>
              <Button variant="contained" onClick={handleClear}><i class="fa-solid fa-eraser"></i></Button>
              <Button variant="contained" type='submit' fullWidth>Contained</Button>
            </Stack>

            </form>

        </div>
      </div>
      </>
  );
}

export default App;
