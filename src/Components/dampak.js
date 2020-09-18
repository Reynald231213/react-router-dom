import React from 'react'

class Dampak extends React.Component{
    render() {
        return(
          <body>
<div class="jumbotron">
  <center>
  <div class="alert alert-danger" role="alert"></div>
    <h1 class="display-4">Gimana Sih Cara Mencegahnya ?</h1>
    <div class="alert alert-danger" role="alert"></div>
  <p class="lead">Mencegah Lebih Baik Daripada Mengobati tak Perlu Panik dalam menghadapi Pandemi Ini!</p>
  <hr class="my-4"></hr>
  <p>Untuk Info Selanjutnya Klik Di Bawah</p>
  <p class="lead">
    <a class="btn btn-success btn-lg"  role="button" data-toggle="modal" data-target="#exampleModalLong">YUK CEGAH !</a>
  </p>
  </center>
   <div class = "container">
            <hr/>
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">VAKSIN VIRUS</h5><hr/>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h3><center>DISIPLIN ADALAH VAKSIN !</center></h3>
        <h3>INTINYA TAATLAH PADA PROTOKOL KESEHATAN YANG TELAH DIADAKAN OLEH PEMERINTAH </h3>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Tutup</button>
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

export default Dampak;
