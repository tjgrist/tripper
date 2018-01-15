
// public handleSubmit() {
//     console.log(this.state.submittedValues);
//     if (this.state.submittedValues) {
//       let url = '/api/trips/calculate'
      
//       fetch(url, {
//           method: 'POST',
//           body: JSON.stringify(this.state.submittedValues), 
//           headers: new Headers({
//             'Content-Type': 'application/json'
//           })
//         }).then(res => res.json())
//         .catch(error => console.error('Error:', error))
//         .then(response => {
//             this.handleResponse(response);
//         });
//     }
// }