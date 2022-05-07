

const canvasModal = new bootstrap.Modal(document.getElementById("modalCanvas"));
/*** Pregunta 1 ***/
$(function () {
  $("#modalCanvas").on("show.bs.modal", function (e) {
    //let canvas = bootstrap.Modal.getInstance(document.getElementById('modalCanvas'));
    let trigger = $(e.relatedTarget);
    let modalId =
      "modal" +
      trigger
        .data("bsModal")
        .replace(/(\b[a-z](?!\s))/g, (match) => match.toUpperCase())
        .replace(/-/g, "");
    let modalName = trigger.data("bsModal");
    /*let url =
      "https://davidvega.free.beeceptor.com/get/modal/" +
      modalName +
      "/" +
      (trigger[0].param ?? "");*/
    /*let url = "https://oscarsalazar.free.beeceptor.com/";*/
	let url =
      "https://roadrunner.vega.technology/get/modal/select-contact-test/" +
      modalName +
      "/" +
      (trigger[0].param ?? "");
    $.post(url, trigger.data(), function (data) {
      if (data == "error") {
      } else {
        console.log("ola");
        if ($("#" + modalId).length) {
        }
        console.log(modalId);
        $("modal").append(data);
        let myModal = new bootstrap.Modal(document.getElementById(modalId));
        hideModal();
        myModal.show();
      }
    }).fail(function (xhr, textStatus, error) {
      console.log("aaaaaaaaaaaaaah");
      let canvas = document.getElementById("modalCanvas");
      hideModal();
      console.log(canvasModal);
    });
  });
});
function hideModal() {
  $("#modalCanvas").removeClass("in");
  $(".modal-backdrop").remove();
  $("body").removeClass("modal-open");
  $("body").css("padding-right", "");
  $("#modalCanvas").hide();
}
/*** Pregunta 2 ***/
// key1 => Address 1, key2 => Address 2, key3 => Address 3
function updateAddress() {
  var keysSel = { 1: "Address 1", 2: "Address 2", 3: "Address 3" };
  var selectElem = $("#select-address");

  $.each(keysSel, function (index, value) {
    $("<option/>", {
      value: index,
      text: value,
    }).appendTo(selectElem);
  });
}

/*** Pregunta 3 ***/
const modalSelectContact = {
  confirm: function () {
    let $e = $("#modalSelectContact input[type=radio]:checked");
    let $i = $("#input");
    let contactId = $e.data("contactId");
    let contactName = $e.data("contactName");
    $i.data("contactId", contactId);
    $i.data("contactName", contactName);
    $i.val($("#input").data().contactName);
    updateAddress();
  },
};
