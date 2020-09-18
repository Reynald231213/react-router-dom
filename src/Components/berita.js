import React from 'react'

class Berita extends React.Component{
    render() {
        return(
            <body>
                <div class=" shadow-lg p-3 mb-2 bg-light text-dark">
                <br/>
                <div className="container">
                <div class="alert alert-danger" role="alert">
                    <h2><center>Video Pembelajaran Dan Info Tentang COVID 19</center></h2>
                </div>
                </div>
            <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <center>
        <h2 class="card-title">Video</h2>
        <iframe width="538" height="360" src="https://www.youtube.com/embed/4oWU9CSE4dc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </center>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <center>
        <h2 class="card-title">Video</h2>
        <iframe width="538" height="360" src="https://www.youtube.com/embed/L2gtsv1G9DE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </center>
      </div>
    </div>
  </div>
</div>


  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <center>
        <h2 class="card-title">Video</h2>
        <iframe width="538" height="360" src="https://www.youtube.com/embed/F2tsQxubZEE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </center>
      </div>
    </div>
  
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Berita dan Video Lainnya ?</h3>
<button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
 Klik Disini !
</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLongTitle">Silahkan Pilih Website Di Bawah Ini !</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h3><a href = "https://kompasiana.com">Kompasiana</a></h3>
      <h3><a href = "https://jawapos.com">Jawapos</a></h3>
      <h3><a href = "https://detik.com">Detik</a></h3>
      <h3><a href = "https://www.cnnindonesia.com/">CNN Indonesia</a></h3>
      <h3><a href = "https://liputan6.com">Liputan6</a></h3>
      <h3><a href = "https://www.tribunnews.com/">Tribunnews</a></h3>
      <h3><a href = "https://kompas.com">Kompas</a></h3>
      <div class="modal-footer">
        <h3><button type="button" class="btn btn-secondary" data-dismiss="modal">Gak Jadi</button></h3>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  </div>
  </div>
</div>
</body>
        )
    }
}

export default Berita;
