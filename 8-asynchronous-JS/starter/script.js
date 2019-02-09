const connectUrl1 = 'https://himate.hyundai-ce.com/Page/Asmx/AppService.asmx?op=PG_RDMB0200_MACHINE_INFO?MACHINE_NO=HHKHW600EF0000048&USER_ID=A480851&LANGUAGE=';

const connectUrl2 = 'https://himate.hyundai-ce.com/Page/Asmx/AppService.asmx?op=PG_RDMB0200_MACHINE_INFO?MACHINE_NO=HHKHW600EF0000048&USER_ID=A480851&LANGUAGE=';

const connectUrl3 = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY';

const connectUrl4 = 'https://himate.hyundai-ce.com/api/AEMP2.0/Fleet/Equipment/Makecode/Model/HHKHW600EF0000048/Locations/2016-10-01/2016-10-30';



// // http try1
// const httpRequest1 = new XMLHttpRequest();

// httpRequest1.onreadystatechange = () => {
//     const httpRequest1 = this;
//     // process the server resonse here
//     if(this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//     } else {
//         console.log(`ReadyState: ${this.readyState}, status: ${this.status}`);
//         console.log(this.getResponseHeader('Content-Type'));
//     }
// };

// httpRequest1.open('GET', connectUrl1, true);
// //httpRequest.setRequestHeader('Accept', 'application/json');
// httpRequest1.send();



// http try2
// const httpRequest2 = new XMLHttpRequest();

// const auth_key = 'CeuYuxkA8ccHqtO2zlkiwg==';
// httpRequest2.open('POST', connectUrl4);
// httpRequest2.setRequestHeader('HHI_AEMP2.0_KEY', auth_key);
// httpRequest2.setRequestHeader('Accept', 'application/json');
// httpRequest2.onreadystatechange = () => {
    
//     if(httpRequest2.readyState == 4 && httpRequest2.status == 200) {
//         console.log(httpRequest2.responseText);
//     }
    
// };
// httpRequest2.send();



