import React, { Component } from 'react'
import DataHeading from './DataHeading'

export class HandlingUnits extends Component {
    render() {
        return (
            <>
                <div className='container mt-3'>
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
                                                        <label>Type</label>
                                                        <input className='form-control' />
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
                                                            <div className='col-3'>
                                                                <input className='form-control' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className='row m-2'>
                                                    <div className='col-3'>
                                                        <label>Product</label>
                                                        <input className='form-control' />
                                                    </div>
                                                    <div className='col-3'>
                                                        <label> Product Qty</label>
                                                        <input className='form-control' />
                                                    </div>

                                                    <div className='col-2'>
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
                                                    <button className='btn btn-primary m- 2'>Cancel</button>
                                                    <button className='btn btn-primary m-2'>Save and Add New</button>
                                                    <button className='btn btn-primary m-2'>Save</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className='mt-4'>
                                            <DataHeading />
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
