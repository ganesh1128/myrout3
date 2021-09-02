import React from "react";


function Product() {
 
  return (
    <>
      <h1 class="h3 mb-2 text-gray-800">Products</h1>
      <p class="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the  official DataTables documentation.
      </p>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
          
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>                    
                    <th>Action</th>                    
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  <td>1</td>
                  <td>abc</td>
                  <td>123</td>
                  <td>
                    <button  className="btn btn-sm btn-primary ">Edit</button>
                    <button  className="btn btn-sm btn-danger">Delete</button>
                  </td>
                 
                </tbody>
              </table>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
