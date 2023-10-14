import React, { useRef } from 'react';
import './Product.css';
import { FaCarrot} from 'react-icons/fa';
import { FaEgg } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import vec1 from '../../images/Vector1.png';
import vec2 from '../../images/Vector2.png';
import vec3 from '../../images/Vector3.png';
import vec4 from '../../images/Vector4.png';
import vec5 from '../../images/Vector5.png';
import Produce from './Produce';
import Dairy from './Dairy';
import Meat from './Meat';
import Canned from './Canned';
import Frozen from './Frozen';
import Prepared from './Prepared';
import Bakery from './Bakery';
import { Link } from 'react-router-dom';


const Products = () => {
    const pro = useRef(null);
    const dairy = useRef(null);
    const meat = useRef(null);
    const canned = useRef(null);
    const frozen = useRef(null);
    const prepare = useRef(null);
    const bakery = useRef(null);


    const handleProduce = ()=>{
        pro.current.scrollIntoView({behaviour:'smooth'});
    }
    const handleDairy = ()=>{
        dairy.current.scrollIntoView({behaviour:'smooth'});
    }
    const handleMeat = ()=>{
        meat.current.scrollIntoView({behaviour:'smooth'});
    }
    const handleCanned = ()=>{
        canned.current.scrollIntoView({behaviour:'smooth'});
    }
    const handleFrozen = ()=>{
        // console.log(frozen.current)
        frozen.current.scrollIntoView({behaviour:'smooth'});
    }
    const handlePrepare = ()=>{
        prepare.current.scrollIntoView({behaviour:'smooth'});
    }
    const handleBakery = ()=>{
        bakery.current.scrollIntoView({behaviour:'smooth'});
    }
    return (
        <div className='ProductsContainer'>
            <div className='sidebar'>
                <div>
                    {/* <img src={vec1} className='mobileView' alt='img' /> */}
                    <FaCarrot className='mobileView' size={20} color="#B6BAC3" />
                    <Button variant="primary" onClick={handleProduce}>Produce</Button>{' '}
                </div>
                <div>
                    <img src={vec2} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handlePrepare}>Prepared foods</Button>{' '}
                </div>
                <div>
                    <img src={vec3} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleCanned}>Canned food and soups</Button>{' '}
                </div>
                <div>
                    <img src={vec4} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleProduce}>Produce</Button>{' '}
                </div>
                <div>
                    <img src={vec5} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleBakery}>Bakery</Button>{' '}
                </div>
                <div>
                    <FaEgg className='mobileView' size={200} color="#B6BAC3" />
                    {/* <img src={vec1} className='mobileView' alt='img' /> */}
                    <Button variant="primary" onClick={handleDairy}>Dairy and eggs</Button>{' '}
                </div>
                <div>
                    <img src={vec2} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleFrozen}>Frozen</Button>{' '}
                </div>
                <div>
                    <img src={vec3} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleMeat}>Meat</Button>{' '}
                </div>
                <div>
                    <img src={vec4} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleDairy}>Diary and eggs</Button>{' '}
                </div>
                <div>
                    <img src={vec5} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleBakery}>Bakery</Button>{' '}
                </div>
                <div>
                    <img src={vec5} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleProduce}>Produce</Button>{' '}
                </div>
                <div>
                    <img src={vec1} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleDairy}>Dairy and eggs</Button>{' '}
                </div>
                <div>
                    <img src={vec2} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={()=>handleFrozen()}>Frozen</Button>{' '}
                </div>
                <div>
                    <img src={vec3} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleMeat}>Meat</Button>{' '}
                </div>
                <div>
                    <img src={vec4} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleDairy}>Diary and eggs</Button>{' '}
                </div>
                <div>
                    <img src={vec5} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleBakery}>Bakery</Button>{' '}
                </div>


                {/* const pro = useRef(null);
    const dairy = useRef(null);
    const meat = useRef(null);
    const canned = useRef(null);
    const frozen = useRef(null);
    const prepare = useRef(null);
    const bakery = useRef(null); */}

            </div>
            <div className='allElements'>
                <Produce pro={pro}/>
                <Prepared prepare={prepare}/>
                <Canned canned={canned}/>
                <Produce pro={pro}/>
                <Bakery bakery={bakery}/>
                <Dairy dairy={dairy}/>
                <Frozen frozen={frozen}/>
                <Meat meat={meat}/>
                <Dairy dairy={dairy}/>
                <Bakery bakery={bakery}/>
                <Dairy dairy={dairy}/>
                <Prepared prepare={prepare}/>
                <Canned canned={canned}/>
                <Produce pro={pro}/>
            </div>
        </div>
    );
}

export default Products