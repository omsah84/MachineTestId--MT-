import React, { Component } from 'react'
import Data from './Data'
import { AiOutlineSearch } from 'react-icons/ai';
import { FcCancel } from 'react-icons/fc';
import { AiTwotoneSave } from 'react-icons/ai';

export class HandlingUnits extends Component {
    render() {
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
                                                        <select name="cars" className='w-50'>
                                                            <option value="volvo">Volvo</option>
                                                            <option value="saab">Saab</option>
                                                            <option value="fiat">Fiat</option>
                                                            <option value="audi">Audi</option>
                                                        </select>
                                                    </div>
                                                    <div className='col-3'>
                                                        <label>Qty</label>
                                                        <input className='form-control' />
                                                    </div>
                                                    <div className='col-6'>
                                                        <label>Dimensions(LxWxHxD)</label>
                                                        <div className='row'>
                                                            <div className='col-3'>
                                                                <input className='form-control' />
                                                            </div>
                                                            <div className='col-3'>
                                                                <input className='form-control' />
                                                            </div>
                                                            <div className='col-3'>
                                                                <input className='form-control' />
                                                            </div>
                                                            <div className='col-3 m-auto'>
                                                                <select name="cars" className='w-50 bg-light'>
                                                                    <option value="fiat">Inch</option>
                                                                    <option value="volvo">cm</option>
                                                                    <option value="saab">m</option>
                                                                    <option value="audi">Audi</option>
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
                                                                <input className='form-control' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-3'>
                                                        <label> Product Qty</label>
                                                        <input className='form-control' />
                                                    </div>

                                                    <div className='col-2 m-auto'>
                                                        <br />
                                                        <input type='checkbox' className='m-1' />
                                                        <label>Non-Stackable</label>
                                                    </div>

                                                    <div className='col-4'>
                                                        <label>Stact Qty</label>
                                                        <input className='form-control' />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className='card mt-3'>
                                                <div className='text-end'>
                                                    <button className='btn btn-primary m- 2 '><FcCancel />Cancel</button>
                                                    <button className='btn btn-primary m-2'> <AiTwotoneSave />Save and Add New</button>
                                                    <button className='btn btn-primary m-2'> <AiTwotoneSave />Save</button>
                                                </div>
                                            </div>


                                        </form>
                                        <div className='mt-4'>
                                            <Data />
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
}

export default HandlingUnits
