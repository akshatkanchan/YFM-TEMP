import { Injectable } from '@angular/core';

@Injectable()
export class XltofirestoreService {

  // ref = firebase.storage().ref('excel');
  // constructor(private http: Http, private bookingService:BookingsService) { }

  // uploadFile(file) {
  //   return new Promise((resolve) => {
      
  //   this.ref.put(file).then(function (snapshot) {
  //       let downloadurl = snapshot.downloadURL;
  //       firebase.database().ref('excelimport').child('newexcel').set({
  //         thaturl: downloadurl
  //       }).then(() => {
          
              
  //         })
          
        
  //   });
  //   setTimeout(() => {
  //           this.firestorethis().then(() => {
  //             resolve();
  //           }) 
  //         }, 180000);  
  //   })  
    
    
  // }

  // firestorethis() {
  //   return new Promise((resolve) => {

    
  //      firebase.storage().ref('jsonfile.json').getDownloadURL().then((url) => {
  //       this.http.get(url).map(res => res.json()).subscribe((data) => {
  //         let somerand = JSON.stringify(data);
  //         this.storethis(data).then(() => {
  //           resolve();
  //         })
  //   })
  //      })
  // })    
    
  // }

  // storethis(somejson) {
  //   return new Promise((resolve) => {

    
  //     _.map(somejson, (element, i) => {
  //       _.keys(element).map(elementkey => {
  //         var x=random(15);
  //         this.bookingService.addBooking(element);
  //       })
  //     })
  //     resolve();
  //   })

      
  // }

}
