import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class FileuploadService {
 
  constructor(private http:Http, private _http:HttpClient) { }
 
  uploadfile(companyName,folderName,fileName,file) {

    const params = {
      Key: companyName+"/"+folderName+"/"+fileName,
      Body: file,
      tmpName : fileName
    };

    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/files/upload',params,{headers:headers}).subscribe();

  }

  getFile(companyName,folderName,fileName){
    console.log(companyName,folderName,fileName)
    const params={
      key: companyName+"/"+folderName+"/"+fileName,
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/files/download',params,{headers:headers}).map(res=>res)
  }

  getSelfDriveVideoFile(companyName,dutyId)
  {
    console.log(companyName,dutyId)
    const params={
      key: companyName+"/selfDrivePics/Video/"+dutyId+"/"
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/files/getVideoFile',params,{headers:headers}).map(res=>res)
  }

  getSelfDriveImageFiles(companyName,dutyId)
  {
    const params={
      key: companyName+"/selfDrivePics/Pictures/"+dutyId+"/"
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/files/getImageFiles',params,{headers:headers}).map(res=>res)
  }

  createImageAttachments(files,id)
  {
    const params = {
      Body: files,
      invoiceId:id
    };

    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/files/attachmentImages',params,{headers:headers}).subscribe();
  }

  generateInvoicePDF(temp, name,type,user,companyProfile,bankAccount)
  {

    console.log(type)
    var data={
      data:temp,
      tmpName: name,
      type:type,
      user:user,
      companyProfile:companyProfile,
      bankAccount:bankAccount
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/files/generateCabInvoice',data,{headers:headers}).subscribe();
  }

  downloadPDF(temp, name,type,user,companyProfile,bankAccount)
  {

    console.log(type)
    var data={
      data:temp,
      tmpName: name,
      type:type,
      user:user,
      companyProfile:companyProfile,
      bankAccount:bankAccount
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this._http.post('/files/downloadPDF',data,{headers:new HttpHeaders({'Authorization':localStorage.getItem('rtcuieo')}).append('Content-Type','application/json'), responseType: 'blob'});
  }

  getPresignedUrl(companyName,filename,foldername):Observable<any>
  {
    console.log(companyName,filename,foldername)
    const params={
      key: companyName+"/"+foldername+"/"+filename
    }
    return this.http.post('/files/getPresignedUrl',params).map(res=>res)
  }

  getFileS3(companyName,filename,foldername)
  {
    const params={
      key: companyName+"/"+foldername+"/"+filename
    }
    return this.http.post('/files/getFileS3',params).map(res=>res)
  }
}
