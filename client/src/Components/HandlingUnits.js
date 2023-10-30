import React, { useState } from 'react'
import Data from './Data'
import { AiOutlineSearch } from 'react-icons/ai';
import { FcCancel } from 'react-icons/fc';
import { AiTwotoneSave } from 'react-icons/ai';


export default function DataHeadling() {
    let [type, setType] = useState("");
    let [qty, setQty] = useState("");
    let [dimensions, setDimensions] = useState({});
    let [product, setProduct] = useState('');
    let [productQty, setProductQty] = useState('');
    let [stackbable, setStackable] = useState(false);
    let [stackQty, setStackQty] = useState('');


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDimensions(values => ({ ...values, [name]: value }));
    }


    let cancel = () => {
        setType(null);
        setQty("");
        setDimensions({});
        setProduct("");
        setProductQty("");
        setStackable(false);
        setStackQty("");
    };

    let saveAdd = () => {
        //use backend code

    };

    let save = () => {
        //use backend code

    };


    return (
        <>
            <div className='fluid-container m-3'>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Handling Units
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div className='formStyle'>
                                    <form className='card'>
                                        <div className='form-group'>
                                            <div className='row m-2'>
                                                <div className='col-3'>
                                                    <label>Type</label><br />
                                                    <select name="type" className='w-50' onChange={(e) => setType(e.target.value)}>
                                                        <option value="volvo">Volvo</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="fiat">Fiat</option>
                                                        <option value="audi">Audi</option>
                                                    </select>
                                                </div>
                                                <div className='col-3'>
                                                    <label>Qty</label>
                                                    <input className='form-control' name='qty' value={qty} onChange={(e) => setQty(e.target.value)} />
                                                </div>
                                                <div className='col-6'>
                                                    <label>Dimensions(LxWxHxD)</label>
                                                    <div className='row'>
                                                        <div className='col-3'>
                                                            <input className='form-control' type='number' name="L" value={dimensions.L || ""} onChange={handleChange} />
                                                        </div>
                                                        <div className='col-3'>
                                                            <input className='form-control' type='number' name="W" value={dimensions.W || ""} onChange={handleChange} />
                                                        </div>
                                                        <div className='col-3'>
                                                            <input className='form-control' type='number' name="H" value={dimensions.H || ""} onChange={handleChange} />
                                                        </div>
                                                        <div className='col-3 m-auto'>
                                                            <select name="D" className='w-50' onChange={handleChange}>
                                                                <option value="inches" type="text"  >Inches</option>
                                                                <option value="cm" type="text"  >cm</option>
                                                                <option value="meter" type="text"  >meter</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className='row m-2'>
                                                <div className='col-3'>
                                                    <label>Product</label><br />
                                                    <div className='row'>
                                                        <div className='col-2  bg-light m-auto'>
                                                            <AiOutlineSearch />
                                                        </div>
                                                        <div className='col-10'>
                                                            <input className='form-control' value={product} onChange={(e) => setProduct(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-3'>
                                                    <label> Product Qty</label>
                                                    <input className='form-control' value={productQty} onChange={(e) => setProductQty(e.target.value)} />
                                                </div>

                                                <div className='col-2 m-auto'>
                                                    <br />
                                                    <input className='m-1' type="checkbox" checked={stackbable} onChange={() => setStackable(!stackbable)} />
                                                    <label>Non-Stackable</label>
                                                </div>

                                                <div className='col-4'>
                                                    <label>Stact Qty</label>
                                                    <input className='form-control' value={stackQty} onChange={(e) => setStackQty(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>


                                        <div className='card mt-3'>
                                            <div className='text-end'>
                                                <button className='btn btn-primary m- 2 ' type='button' onClick={cancel}><FcCancel />Cancel</button>
                                                <button className='btn btn-primary m-2' type='button' onClick={saveAdd}> <AiTwotoneSave />Save and Add New</button>
                                                <button className='btn btn-primary m-2' type='button' onClick={save}> <AiTwotoneSave />Save</button>
                                            </div>
                                        </div>

                                    </form>
                                    <div className='mt-4'>
                                        {
                                            <Data
                                                type={type}
                                                qty={qty}
                                                dimensions={dimensions}
                                                product={product}
                                                productQty={productQty}
                                                stackbable={stackbable}
                                                stackQty={stackQty}
                                            />
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )

}


