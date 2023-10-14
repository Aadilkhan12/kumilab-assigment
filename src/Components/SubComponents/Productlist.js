import React ,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux' ;
import './Productlist.css';
import banana from '../../images/banana.png';
import strawb from '../../images/strawb.png';
import yogurt from '../../images/yog.png';
import blackberry from '../../images/bb.png';
import plus from '../../images/plus.png';
import minus from '../../images/minus.png';


const Productbar = () => {

    const [add1,setAdd1] = useState(false);
    const [add2,setAdd2] = useState(false);
    const [add3,setAdd3] = useState(false);
    const [add4,setAdd4] = useState(false);
    const [add5,setAdd5] = useState(false);
    const [add6,setAdd6] = useState(false);
    const [add7,setAdd7] = useState(false);
    const [add8,setAdd8] = useState(false);
    const [add9,setAdd9] = useState(false);
   

    const dispatch=useDispatch();
    const count=useSelector(state=>state.count);

  

    return (
        
            <div className='filled'>
                <div className='onee' id='1'>
                    <img src={banana} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    

                    { !add1 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdd1(!add1);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'125px',left:'105px',borderRadius:'50%'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdd1(!add1);
                            }}/> }


                    <h2 style={{padding:'1px',fontFamily:'Muli'}}>$0.69</h2>
                    <h3 style={{padding:'1px',fontFamily:'Muli'}}>Banana 1 ct</h3>
                    <h6 style={{opacity:'0.4'}}>18 oz</h6>
                </div>
                <div className='onee' id='2'>
                    <img src={strawb} style={{height:'160px',padding:'20px 5px'}} alt='img' />


                    { !add2 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdd2(!add2);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'125px',left:'105px',borderRadius:'50%'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdd2(!add2);
                            }}/> }


                    <h2 style={{padding:'1px',fontFamily:'Muli'}}>$0.69</h2>
                    <h3 style={{padding:'1px',fontFamily:'Muli'}}>Strawberries</h3>
                    <h6 style={{opacity:'0.4'}}>1 lb</h6>
                </div>
                <div className='onee' id='3'>
                    <img src={yogurt} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    
                    { !add3 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdd3(!add3);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'125px',left:'105px',borderRadius:'50%'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdd3(!add3);
                            }}/> }


                    <h2 style={{padding:'1px',fontFamily:'Muli'}}>$0.69</h2>
                    <h3 style={{padding:'1px',fontFamily:'Muli'}}>Yogurt</h3>
                    <h6 style={{opacity:'0.4'}}>1 lb</h6>
                </div>
                <div className='onee' id='4'>
                    <img src={blackberry} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    
                    { !add4 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdd4(!add4);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'125px',left:'105px',borderRadius:'50%'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdd4(!add4);
                            }}/> }


                    <h2 style={{padding:'1px',fontFamily:'Muli'}}>$0.69</h2>
                    <h3 style={{padding:'1px',fontFamily:'Muli'}}>Blackberries</h3>
                    <h6 style={{opacity:'0.4'}}>1 lb</h6>
                </div>
                <div className='onee' id='5'>
                    <img src={strawb} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    
                    { !add5 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdd5(!add5);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'125px',left:'105px',borderRadius:'50%'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdd5(!add5);
                            }}/> }


                    <h2 style={{padding:'1px',fontFamily:'Muli'}} >$0.69</h2>
                    <h3 style={{padding:'1px',fontFamily:'Muli'}} >Strawberries</h3>
                    <h6 style={{opacity:'0.4'}}>1 lb</h6>
                </div>
                <div className='onee' id='6'>
                    <img src={yogurt} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    
                    { !add6 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdd6(!add6);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'125px',left:'105px',borderRadius:'50%'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdd6(!add6);
                            }}/> }


                    <h2 style={{padding:'1px',fontFamily:'Muli'}} >$0.69</h2>
                    <h3 style={{padding:'1px',fontFamily:'Muli'}} >Yogurt</h3>
                    <h6 style={{opacity:'0.4'}}>1 lb</h6>
                </div>
                <div className='onee' id='7'>
                    <img src={banana} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    
                    { !add7 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdd7(!add7);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'125px',left:'105px',borderRadius:'50%'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdd7(!add7);
                            }}/> }


                    <h2 style={{padding:'1px',fontFamily:'Muli'}}>$0.69</h2>
                    <h3 style={{padding:'1px',fontFamily:'Muli'}}>Banana 1 ct</h3>
                    <h6 style={{opacity:'0.4'}}>18 oz</h6>
                </div>
                <div className='onee' id='8'>
                    <img src={blackberry} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    

                    { !add8 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdd8(!add8);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'125px',left:'105px',borderRadius:'50%'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdd8(!add8);
                            }}/> }


                    <h2 style={{padding:'1px',fontFamily:'Muli'}}>$0.69</h2>
                    <h3 style={{padding:'1px',fontFamily:'Muli'}}>Blackberries</h3>
                    <h6 style={{opacity:'0.4'}}>1 lb</h6>
                </div>
                <div className='onee' id='9'>
                    <img src={strawb} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    
                    { !add9 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdd9(!add9);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'125px',left:'105px',borderRadius:'50%'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdd9(!add9);
                            }}/> }


                    <h2 style={{padding:'1px',fontFamily:'Muli'}}>$0.69</h2>
                    <h3 style={{padding:'1px',fontFamily:'Muli'}}>Strawberries</h3>
                    <h6 style={{opacity:'0.4'}}>1 lb</h6>
                </div>
            </div>
        
    );
}

export default Productbar;
