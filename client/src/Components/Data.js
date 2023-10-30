import React from 'react'

export default function DataHeading(props) {
    return (
        <div>
            <div className='p-2 card'>
                <table class="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Type</th>
                            <th scope="col">Qty</th>  
                            <th scope="col">LxWxHxD</th>
                            <th scope="col">Product</th>
                            <th scope="col">Product Qty</th>
                            <th scope="col">Stackable Qty</th>
                            <th scope="col">Freight Value</th>
                            <th scope="col">Volume</th>
                            <th scope="col">Tot.Qty</th>
                            <th scope="col">Tot.Wt</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                            <td>{props.type}demo</td>
                            <td>{props.qty}demo</td>
                            <td>
                                {/* {props.dimensions['L']+"X" + props.dimensions['W']+"X" +props.dimensions['H'] } */}
                                demo
                                </td>
                            <td>{props.product}demo</td>
                            <td>{props.productQty} demo</td>
                            <td>{props.stackQty}demo</td>
                            <td>{props.product}demo</td>
                            <td>{props.product}demo</td>
                            <td>{props.product}demo</td>
                            <td>{props.product}demo</td>
                            <td>{props.product}demo</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
