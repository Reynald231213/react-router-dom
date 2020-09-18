import React from 'react'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class Beranda extends React.Component{
    render() {
        return(
          <body>
            
          <div class=" shadow-lg p-3 mb-2 bg-light text-black">
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong><h4>Selamat Datang Di Home Page SICOVID 19</h4></strong> 
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        </div>
        <br/>
        <div class=" p-3 mb-5 text-dark">
        <br/>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <div class="alert alert-danger" role="alert"></div>
        <h1 class="display-4">Apa itu SICOVID 19?</h1>
        <div class="alert alert-danger" role="alert"></div>
        <p class="lead">Kami Adalah Web Penyedia Layanan Informasi Tentang Berbagai Informasi tentang Virus Covid 19 Atau Corona</p>
      </div>
      </div>
      </div>
      <div class="alert alert-warning" role="alert">
      <h2><center>Galery</center></h2>
      </div>
        <p>
          <center>
          <div class="alert alert-dark" role="alert">
        <img src ="https://m.ayosemarang.com/images-semarang/post/articles/2020/01/25/51221/908863_720.jpg"></img>
        <img src = "https://www.borneonews.co.id/images/upload/2020/03/03/1583241674-corona-261.jpg"></img>
        <img src ="https://cdn1-production-images-kly.akamaized.net/F11YGjHTTszZ3BljAx-Yxw83qkc=/640x480/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3100445/original/035938400_1586757542-dokter_tempel_foto_wajah_di_baju_hazmat3.jpg"></img>
        </div>
        </center>   
        </p>  
          
    
      
    
<button type="button" class="btn btn-danger btn-block" data-toggle="modal" data-target="#exampleModalLong">
  Copyright 2k20 
</button>
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tentang</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <h3><a href="mailto:moch._reynald_28rpl@student.smktelkom-mlg.sch.id?subject=Pesan%20ini20%adalah%20pesan%20Default&body=Ada%20Kesalahan%20Web%20Nya"><button class = "btn btn-success">Gmail</button></a></h3>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal Ah</button>
      </div>
    </div>
  </div>
</div>
        </body>
            
        )
    }
}
export default Beranda;