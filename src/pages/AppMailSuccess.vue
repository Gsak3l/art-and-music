<template>
  <div id="myModal" style="padding-top: 100px;">
    <div class="modal-dialog modal-confirm">
      <div class="modal-content">
        <div class="modal-header">
          <div class="icon-box">
            <i class="fa-solid fa-check"></i>
          </div>
        </div>
        <div class="modal-body text-center">
          <h4>Τέλεια!</h4>
          <p>Το email σας στάλθηκε με επιτυχία</p>
          <a href="/">
            <button class="btn btn-success" data-dismiss="modal">
              <i class="fa-solid fa-arrow-left"></i>
              <span>Επιστροφή</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMailSuccess"
}
</script>

<style scoped>

.modal-confirm .modal-content {
  padding: 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
}

.modal-confirm .modal-header {
  background: #FED136;
  border-bottom: none;
  position: relative;
  text-align: center;
  margin: -20px -20px 0;
  border-radius: 5px 5px 0 0;
  padding: 35px;
}

.modal-confirm h4 {
  text-align: center;
  font-size: 36px;
  margin: 10px 0;
}

.modal-confirm .form-control,
.modal-confirm .btn {
  min-height: 40px;
  border-radius: 3px;
}

.modal-confirm .close {
  position: absolute;
  top: 15px;
  right: 15px;
  color: #fff;
  text-shadow: none;
  opacity: 0.5;
}

.modal-confirm .close:hover {
  opacity: 0.8;
}

.modal-confirm .icon-box {
  color: #fff;
  width: 95px;
  height: 95px;
  display: inline-block;
  border-radius: 50%;
  z-index: 9;
  border: 5px solid #fff;
  padding: 15px;
  text-align: center;
}

.modal-confirm .icon-box i {
  font-size: 64px;
  margin: -4px 0 0 -4px;
}

.modal-confirm.modal-dialog {
  margin-top: 80px;
}

.modal-confirm .btn {
  color: #fff;
  background: #FED136;
  text-decoration: none;
  transition: all 0.4s;
  line-height: normal;
  border-radius: 30px;
  margin-top: 10px;
  padding: 6px 20px;
  border: none;
}

.modal-confirm .btn:hover,
.modal-confirm .btn:focus {
  background: #eda645;
  outline: none;
}

.modal-confirm .btn span {
  margin: 1px 3px 0;
  float: left;
}

.modal-confirm .btn i {
  margin-left: 1px;
  font-size: 20px;
  float: right;
}

.trigger-btn {
  display: inline-block;
  margin: 100px auto;
}
</style>