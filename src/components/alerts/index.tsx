import Swal from "sweetalert2";

function showLoadingAlert(message = "Please wait....") {
  return Swal.fire({
    html: message,
    didOpen: () => {
      Swal.showLoading();
    }
  });
}

function showSuccessAlert(message: string) {
  return Swal.fire({
    text: message,
    icon: "success"
  });
}

function showErrorAlert(message: string) {
  return Swal.fire({
    text: message,
    icon: "error"
  });
}

function showInfoAlert(message: string) {
  return Swal.fire({
    text: message,
    icon: "info"
  });
}

function showConfirmDialogAlert(heading: string, description: string) {
  return Swal.fire({
    icon: "warning",
    title: heading,
    text: description,
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No"
  });
}

export {
  showLoadingAlert,
  showSuccessAlert,
  showErrorAlert,
  showInfoAlert,
  showConfirmDialogAlert
};
