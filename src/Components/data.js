import React from 'react';

class Data extends React.Component{
    render() {
        return(
            <body>
               <link rel="stylesheet" type="text/css" href= 'tabel.css' /> 
               <div class = "w-100 h- p-3"> 
            <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col"><h3>Negara</h3></th>
                <th scope="col"><h3>PDP</h3></th>
                <th scope="col"><h3>Sembuh</h3></th>
                <th scope="col"><h3>Meninggal</h3></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><i class="indonesia flag"></i>Indonesia</th>
                <td>237 rb</td>
                <td>171 rb</td>
                <td>9.336</td>
              </tr>
              <tr>
                <th scope="row"><i class="india flag"></i>India</th>
                <td>5,21 jt</td>
                <td>4,11 jt</td>
                <td>84.372</td>
              </tr>
              <tr>
                <th scope="row"><i class="japan flag"></i>Jepang</th>
                <td>77.494</td>
                <td>69.899</td>
                <td>1.482</td>
              </tr>
              <tr>
                <th scope="row"><i class="south korea flag"></i>Korea Selatan</th>
                <td>22.783</td>
                <td>19.771</td>
                <td>377</td>
              </tr>
              <tr>
                <th scope="row"><i class="north korea flag"></i>Korea Utara</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row"><i class="china flag"></i>Tiongkok</th>
                <td>85.255</td>
                <td>80.456</td>
                <td>4.634</td>
              </tr>
            </tbody>
          </table>
          </div> 
      </body>
       ) 
        }
    }
    export default Data;
